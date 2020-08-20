import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TagType from '../TagType';

import { Container, Title, Image, Number, Name, TagsContainer } from './styles';

function PokemonCard({ pokemon }) {
  return (
    <Link to={`/detail/${pokemon.id}`}>
      <Container>
        <Title>
          <Number>#{pokemon.number}</Number>
          <Name>{pokemon.name}</Name>
        </Title>
        <Image src={pokemon.image} alt={pokemon.name} />
        <TagsContainer>
          {pokemon.types.map((type) => (
            <TagType key={type} type={type} />
          ))}
        </TagsContainer>
      </Container>
    </Link>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default PokemonCard;
