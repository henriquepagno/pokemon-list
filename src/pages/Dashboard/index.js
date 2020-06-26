import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import InfiniteScroll from 'react-infinite-scroller';
import { GET_POKEMONS } from '../../graphql/get-pokemons';

// import { Container } from './styles';

export default function Dashboard() {
  const [quantity, setQuantity] = useState(10);

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: quantity },
  });

  // const { data: { pokemons = [], fetchMore } = {} } = useQuery(GET_POKEMONS, {
  //   variables: { first: 20 },
  // });

  console.log(pokemons);
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

  return (
    <>
      {pokemons &&
        pokemons.map((pokemon) => (
          <p key={pokemon.id}>Pokemon {pokemon.name}</p>
        ))}
    </>
  );
}
