import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../../graphql/get-pokemons';
import { GET_POKEMON_BY_NAME } from '../../graphql/get-pokemon';

import { Container, PokemonRow, SinglePokemon } from './styles';

import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';

export default function Dashboard() {
  const [queryString, setQueryString] = useState('');

  const { data: { pokemons = [], refetch } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  const [search, { data: { pokemon = [] } = {} }] = useLazyQuery(
    GET_POKEMON_BY_NAME,
    {
      variables: { name: queryString },
    }
  );

  useEffect(() => {
    if (refetch) {
      console.log('refetch');
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearch(searchString) {
    setQueryString(searchString);
    search();
  }

  return (
    <Container>
      <SearchInput
        placeholder="Buscar por encomendas"
        handleSearch={handleSearch}
      />

      {queryString && (
        <SinglePokemon>
          {pokemon ? (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ) : (
            <p>Não há dados para a consulta.</p>
          )}
        </SinglePokemon>
      )}

      {!queryString && (
        <PokemonRow>
          {pokemons &&
            pokemons.map((pokemonReg) => (
              <PokemonCard key={pokemonReg.id} pokemon={pokemonReg} />
            ))}
        </PokemonRow>
      )}
    </Container>
  );
}
