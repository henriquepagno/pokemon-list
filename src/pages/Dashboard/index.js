import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../../graphql/get-pokemons';

// import { Container } from './styles';

export default function Dashboard() {
  const pokemon = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  }).data;

  console.log(pokemon);

  return <></>;
}
