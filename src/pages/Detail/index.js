import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import TagType from '../../components/TagType';
import Input from '../../components/Input';

import { cache } from '../../graphql/apolloClient';

import { GET_POKEMON_BY_ID } from '../../graphql/queries/get-pokemon';

import {
  Container,
  TitleContainer,
  ImageContainer,
  Classification,
  Number,
  Name,
  Image,
  TagsContainer,
} from './styles';

export default function Detail() {
  const formRef = useRef(null);
  const { id: pokemonId } = useParams();

  const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: pokemonId },
  });

  console.log('pokemon', pokemon);

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
  });

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      cache.modify({
        id: cache.identify(pokemon),
        fields: {
          name(cachedName) {
            return cachedName.toUpperCase();
          },
          maxHP() {
            return data.maxHP;
          },
          maxCP() {
            return data.maxCP;
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

      <Form ref={formRef} onSubmit={handleSubmit} id="pokemonForm">
        <Input
          name="maxHP"
          type="text"
          label="MaxHP"
          placeholder="Inform pokemon's max HP"
        />
        <Input
          name="maxCP"
          type="text"
          label="MaxCP"
          placeholder="Inform pokemon's max HP"
        />
      </Form>
      <button type="submit" form="pokemonForm">
        Save
      </button>
    </Container>
  );
}
