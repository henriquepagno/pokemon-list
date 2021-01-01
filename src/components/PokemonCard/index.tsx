import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import TagType from '../TagType';

import { GET_POKEMON_BY_ID } from '../../graphql/queries/get-pokemon';

import { Container, Title, Image, Number, Name, TagsContainer } from './styles';

interface Parameters {
  pokemonId: string;
  handleClick: () => void;
}

function PokemonCard({ pokemonId, handleClick }: Parameters) {
  const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: pokemonId },
  });

  return (
    <Link id={pokemon.id} to={`/detail/${pokemon.id}`}>
      <Container onClick={handleClick}>
        <Title>
          <Number>#{pokemon.number}</Number>
          <Name>{pokemon.name}</Name>
        </Title>
        <Image src={pokemon.image} alt={`${pokemon.name} image`} />
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
  pokemonId: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

PokemonCard.defaultProps = {
  handleClick: null,
};

export default PokemonCard;
