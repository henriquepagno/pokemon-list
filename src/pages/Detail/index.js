import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMON_BY_ID } from '../../graphql/get-pokemon';

import { Container, Image } from './styles';

export default function Detail() {
  const { id: pokemonId } = useParams();
  const [filter, setfilter] = useState('');

  console.log(pokemonId);

  const { data: { pokemon = [], refetch } = {} } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: filter },
  });

  // useEffect(() => {
  //   setfilter(pokemonId);
  // }, [pokemonId]);

  useEffect(() => {
    console.log('entra');
    setfilter(pokemonId);
  }, [pokemonId]);

  console.log(pokemon);

  return (
    <Container>
      <Image src={pokemon.image} alt={pokemon.name} />
    </Container>
  );
}
