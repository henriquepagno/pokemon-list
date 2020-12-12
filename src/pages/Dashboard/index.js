import React, { useState, useEffect, useRef } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import scrollPositionState from '../../helpers/scrollPositionState';

import { GET_POKEMONS } from '../../graphql/queries/get-pokemons';
import { GET_POKEMON_BY_NAME } from '../../graphql/queries/get-pokemon';

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
  const listRef = useRef();
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

  function handleClick() {
    const { scrollTop } = listRef.current;

    scrollPositionState(scrollTop);
  }

  useEffect(() => {
    if (scrollPositionState() && listRef.current) {
      listRef.current.scrollTop = scrollPositionState();
    }
  }, []);

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
            placeholder="Search Pokémon"
            handleSearch={handleSearch}
          />
          <Content>
            {queryString && (
              <SinglePokemon>
                {pokemon ? (
                  <PokemonCard
                    key={pokemon.id}
                    pokemonId={pokemon.id}
                    handleClick={() => handleClick()}
                  />
                ) : (
                  <NoPokemonMessage>
                    No Pokémons found with that name.
                  </NoPokemonMessage>
                )}
              </SinglePokemon>
            )}

            {!queryString && (
              <PokemonRow ref={listRef}>
                {pokemons &&
                  pokemons.map((pokemonReg) => (
                    <PokemonCard
                      key={pokemonReg.id}
                      pokemonId={pokemonReg.id}
                      handleClick={() => handleClick()}
                    />
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
