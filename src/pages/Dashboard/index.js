import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import InfiniteScroll from 'react-infinite-scroller';
import { GET_POKEMONS } from '../../graphql/get-pokemons';
import { GET_POKEMON_BY_NAME } from '../../graphql/get-pokemon';

import { Container, PokemonRow, SinglePokemon } from './styles';

import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';

export default function Dashboard() {
  const [queryString, setQueryString] = useState('');
  // const [pokemonData, setPokemonData] = useState([]);

  // const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
  //   variables: { first: 151 },
  // });

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  // const { data: { pokemon = null } = {} } = useQuery(GET_POKEMON_BY_NAME, {
  //   variables: { name: 'Pikachu' },
  // });

  const [search, { data: { pokemon = [] } = {} }] = useLazyQuery(
    GET_POKEMON_BY_NAME,
    {
      variables: { name: queryString },
    }
  );

  // useEffect(() => {
  //   console.log('useEffect');
  //   console.log('pokemon', pokemon);
  //   console.log('pokemons', pokemons);

  //   // if (pokemon && pokemon.id) {
  //   //   setPokemonData([pokemon]);
  //   // } else {
  //   //   setPokemonData(pokemons);
  //   // }
  // }, [pokemons, pokemon]);

  function handleSearch(searchString) {
    setQueryString(searchString);
    search();
  }

  // const { data: { pokemons = [], fetchMore } = {} } = useQuery(GET_POKEMONS, {
  //   variables: { first: 20 },
  // });

  // console.log(pokemons.length > 0);

  // return (
  //   <>
  //     {pokemons && (
  //       <InfiniteScroll
  //         data-testid="infinite-scroller"
  //         hasMore={quantity < 20}
  //         loader={<p>Loading...</p>}
  //       >
  //         {pokemons.map((pokemon) => (
  //           <p>Pokemon {pokemon.id}</p>
  //         ))}
  //       </InfiniteScroll>
  //     )}
  //   </>
  // );

  // return (
  //   <Container>
  //     <SearchInput
  //       placeholder="Buscar por encomendas"
  //       handleSearch={handleSearch}
  //     />
  //     {queryString ? (
  //       <SinglePokemon>
  //         <PokemonCard key={pokemon.id} pokemon={pokemon} />
  //       </SinglePokemon>
  //     ) : (
  //       <PokemonRow>
  //         {pokemons &&
  //           pokemons.map((pokemonReg) => (
  //             // <li key={pokemon.id}>Pokemon {pokemon.name}</li>
  //             <PokemonCard key={pokemonReg.id} pokemon={pokemonReg} />
  //           ))}
  //       </PokemonRow>
  //     )}
  //   </Container>
  // );

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
              // <li key={pokemon.id}>Pokemon {pokemon.name}</li>
              <PokemonCard key={pokemonReg.id} pokemon={pokemonReg} />
            ))}
        </PokemonRow>
      )}
    </Container>
  );
}
