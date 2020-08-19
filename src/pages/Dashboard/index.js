import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { graphql, compose } from 'react-apollo';

import { GET_POKEMONS } from '../../graphql/get-pokemons';
import { GET_POKEMON_BY_NAME } from '../../graphql/get-pokemon';

import { Container, PokemonRow, SinglePokemon } from './styles';

import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';

function Dashboard() {
  const [queryString, setQueryString] = useState('');

  const { loading, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  const [search, { data: { pokemon = [] } = {} }] = useLazyQuery(
    GET_POKEMON_BY_NAME,
    {
      variables: { name: queryString },
    }
  );

  function handleSearch(searchString) {
    console.log('handleSearch');
    setQueryString(searchString);
    search();
  }

  return (
    <Container>
      <SearchInput placeholder="Buscar Pokémon" handleSearch={handleSearch} />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        queryString && (
          <SinglePokemon>
            {pokemon ? (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ) : (
              <p>Não há dados para a consulta.</p>
            )}
          </SinglePokemon>
        )
      )}

      {!queryString && (
        <PokemonRow>
          {pokemons &&
            pokemons.map((pokemonReg) => (
              <PokemonCard key={pokemonReg.id} pokemon={pokemonReg} />
            ))}
        </PokemonRow>
      )}

      {/* {queryString && (
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
      )} */}
    </Container>
  );
}

export default Dashboard;
