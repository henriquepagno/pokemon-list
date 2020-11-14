import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_POKEMON_BY_ID } from '../../graphql/queries/get-pokemon';

import { Container, Image } from './styles';

export default function Detail() {
  const { id: pokemonId } = useParams();

  const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: pokemonId },
  });

  return (
    <Container>
      <Image src={pokemon.image} alt={pokemon.name} />
    </Container>
  );
}
