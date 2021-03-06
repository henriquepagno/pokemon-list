import React, {
  useRef,
  useEffect,
  MutableRefObject,
  ReactElement,
} from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { FormHandles } from '@unform/core';
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
  MainContainer,
  RowContainer,
  RowStatContainer,
  TitleContainer,
  TitleRowContainer,
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

interface UseParams {
  id: string;
}

interface Attack {
  name: string;
  damage: number;
}

interface Data {
  id: string;
  maxHP: number;
  maxCP: number;
  attacks: {
    special: Attack[];
  };
}

export default function Detail(): ReactElement {
  const formRef = useRef() as MutableRefObject<FormHandles>;
  const { id: pokemonId }: UseParams = useParams();

  const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: pokemonId },
  });

  useEffect(() => {
    formRef.current.setData(pokemon);
  }, [pokemon, formRef]);

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

  async function handleSubmit(data: Data) {
    try {
      const form = formRef.current;

      if (form) {
        form.setErrors({});
      }

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
        err.inner.forEach(
          (error: { path: string | number; message: string }) => {
            validationErrors[error.path] = error.message;
          }
        );

        const form = formRef.current;

        if (form) {
          form.setErrors(validationErrors);
        }
      }
    }
  }

  return (
    <Container>
      <MainContainer>
        <DataContainer>
          <TitleContainer>
            <TitleRowContainer>
              <Number>{`#${pokemon.number}`}</Number>
              <Name>{pokemon.name}</Name>
            </TitleRowContainer>
            <TitleRowContainer>
              {pokemon.types && (
                <TagsContainer>
                  {pokemon.types.map((type: string) => (
                    <TagType key={type} type={type} />
                  ))}
                </TagsContainer>
              )}
              <Classification>{pokemon.classification}</Classification>
            </TitleRowContainer>
          </TitleContainer>

          <ImageContainer>
            <Image src={pokemon.image} alt={`${pokemon.name} image`} />
          </ImageContainer>
        </DataContainer>

        <DataContainer>
          <StatsContainer>
            <ContainerTitle>Stats</ContainerTitle>
            <Form ref={formRef as any} onSubmit={handleSubmit} id="pokemonForm">
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
      </MainContainer>
      {pokemon.evolutions && (
        <RowContainer>
          <DataContainer>
            <EvolutionContainer>
              <ContainerTitle>Evolution</ContainerTitle>
              <MarginContainer>
                {pokemon.evolutions.map((pokemonReg: Data, index: number) => (
                  <React.Fragment key={pokemonReg.id}>
                    {index > 0 && <Arrow />}
                    <PokemonCard pokemonId={pokemonReg.id} />
                  </React.Fragment>
                ))}
              </MarginContainer>
            </EvolutionContainer>
          </DataContainer>
        </RowContainer>
      )}
    </Container>
  );
}
