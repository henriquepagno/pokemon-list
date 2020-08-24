import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TagType from '../TagType';

import { Container, Title, Image, Number, Name, TagsContainer } from './styles';

function PokemonCard({ pokemon, handleClick }) {
  return (
    <Link id={pokemon.id} to={`/detail/${pokemon.id}`}>
      <Container onClick={handleClick}>
        <Title>
          <Number>#{pokemon.number}</Number>
          <Name>{pokemon.name}</Name>
        </Title>
        <Image src={pokemon.image} alt={pokemon.name} />
        {pokemon.types && (
          <TagsContainer>
            {pokemon.types.map((type) => (
              <TagType key={type} type={type} />
            ))}
          </TagsContainer>
        )}
      </Container>
    </Link>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PokemonCard;
