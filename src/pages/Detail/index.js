import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import TagType from '../../components/TagType';
import Input from '../../components/Input';
import AttackList from '../../components/AttackList';
import PokemonCard from '../../components/PokemonCard';

import { cache } from '../../graphql/apolloClient';

import { GET_POKEMON_BY_ID } from '../../graphql/queries/get-pokemon';

import {
  Container,
  RowContainer,
  RowStatContainer,
  TitleContainer,
  ImageContainer,
  Classification,
  Number,
  Name,
  Image,
  TagsContainer,
  DataContainer,
  StatsContainer,
  SaveContainer,
  EvolutionContainer,
  MarginContainer,
  ContainerTitle,
  Button,
  Arrow,
} from './styles';

export default function Detail() {
  const formRef = useRef(null);
  const { id: pokemonId } = useParams();

  const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: pokemonId },
  });

  useEffect(() => {
    formRef.current.setData(pokemon);
  }, [pokemon]);

  const schema = Yup.object().shape({
    maxHP: Yup.number()
      .required()
      .typeError('Max HP must be a valid number')
      .max(100000, 'Max HP is 100000')
      .min(1, 'Min HP is 1'),
    maxCP: Yup.number()
      .required()
      .typeError('Max CP must be a valid number')
      .max(100000, 'Max CP is 100000')
      .min(1, 'Min CP is 1'),
    attacks: Yup.object({
      special: Yup.array(
        Yup.object().shape({
          name: Yup.string().required(`Attack description can't be null`),
          damage: Yup.number()
            .required()
            .typeError('Damage must be a valid number')
            .min(1, 'Min damage is 1')
            .max(1000, 'Max damage is 1000'),
        })
      ),
    }),
  });

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      cache.modify({
        id: cache.identify(pokemon),
        fields: {
          maxHP() {
            return data.maxHP;
          },
          maxCP() {
            return data.maxCP;
          },
          attacks() {
            const mappedAttacks = data.attacks.special.map((attack) => ({
              ...attack,
              __typename: 'Attack',
            }));

            return {
              __typename: 'PokemonAttack',
              special: [...mappedAttacks],
            };
          },
        },
        broadcast: false, // Include this to prevent automatic query refresh */
      });

      toast.success(`${pokemon.name} updated successfully.`);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <RowContainer>
        <DataContainer color="white">
          <TitleContainer>
            <Number>{`#${pokemon.number}`}</Number>
            <Name>{pokemon.name}</Name>
          </TitleContainer>

          <ImageContainer>
            <Image src={pokemon.image} alt={`${pokemon.name} image`} />
            <Classification>{pokemon.classification}</Classification>
            {pokemon.types && (
              <TagsContainer>
                {pokemon.types.map((type) => (
                  <TagType key={type} type={type} />
                ))}
              </TagsContainer>
            )}
          </ImageContainer>
        </DataContainer>

        <DataContainer color="white">
          <StatsContainer>
            <ContainerTitle>Stats</ContainerTitle>
            <Form ref={formRef} onSubmit={handleSubmit} id="pokemonForm">
              <RowStatContainer>
                <Input
                  name="maxHP"
                  type="text"
                  label="MaxHP"
                  placeholder="Inform pokemon's max HP"
                  width="30%"
                />
                <Input
                  name="maxCP"
                  type="text"
                  label="MaxCP"
                  placeholder="Inform pokemon's max CP"
                  width="30%"
                />
              </RowStatContainer>
              {pokemon.attacks && <AttackList attacks={pokemon.attacks} />}
            </Form>

            <SaveContainer>
              <Button type="submit" form="pokemonForm">
                Save
              </Button>
            </SaveContainer>
          </StatsContainer>
        </DataContainer>
      </RowContainer>
      {pokemon.evolutions && (
        <RowContainer>
          <DataContainer>
            <EvolutionContainer>
              <ContainerTitle>Evolution</ContainerTitle>
              <MarginContainer>
                {pokemon.evolutions.map((pokemonReg, index) => (
                  <>
                    {index > 0 && <Arrow />}
                    <PokemonCard
                      key={pokemonReg.id}
                      pokemonId={pokemonReg.id}
                    />
                  </>
                ))}
              </MarginContainer>
            </EvolutionContainer>
          </DataContainer>
        </RowContainer>
      )}
    </Container>
  );
}
