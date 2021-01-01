import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  margin: 30px auto;

  height: 90%;
  width: 100%;
`;

export const Content = styled.div`
  height: 90%;
  width: 100%;
`;

export const SinglePokemon = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 15px;
  justify-content: center;
`;

export const PokemonRow = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(182px, 1fr));
  gap: 15px;
  padding: 10px 10px;

  overflow-y: auto;
  height: 90%;
  width: 100%;
`;

export const Loading = styled(ReactLoading)`
  padding-top: 60px;
  align-self: center;
`;

export const NoPokemonMessage = styled.p`
  color: white;
`;
