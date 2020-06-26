import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Image, Number, Name } from './styles';

export default function PokemonCard({ pokemon }) {
  return (
    <Container>
      <Image src={pokemon.image} alt={pokemon.name} />
      <Title>
        <Number>{pokemon.number}</Number>
        <Name>{pokemon.name}</Name>
      </Title>
      <Title>
        <Number>{pokemon.number}</Number>
        <Name>{pokemon.name}</Name>
      </Title>
    </Container>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};
