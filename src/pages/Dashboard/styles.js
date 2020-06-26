import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: lightpink;
`;

export const SinglePokemon = styled.ul`
  display: flex;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  justify-content: center;
`;

export const PokemonRow = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;
