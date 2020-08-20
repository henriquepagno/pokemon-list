import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import { GET_POKEMONS } from '../../graphql/get-pokemons';
import { GET_POKEMON_BY_NAME } from '../../graphql/get-pokemon';

import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';

import {
  Container,
  Content,
  PokemonRow,
  SinglePokemon,
  Loading,
  NoPokemonMessage,
} from './styles';

import Colors from '../../styles/Constants';

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
    setQueryString(searchString);
    search();
  }

  return (
    <Container>
      {loading ? (
        <Loading
          type="spinningBubbles"
          color={Colors.red}
          height="10%"
          width="10%"
        />
      ) : (
        <>
          <SearchInput
            placeholder="Buscar Pokémon"
            handleSearch={handleSearch}
          />
          <Content>
            {queryString && (
              <SinglePokemon>
                {pokemon ? (
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ) : (
                  <NoPokemonMessage>
                    No Pokémons found with that name.
                  </NoPokemonMessage>
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
          </Content>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
