import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import history from '../../services/history';

import { Container, Title, Image, Number, Name } from './styles';

function PokemonCard({ pokemon }) {
  function handleEdit(id) {
    history.push(`/detail/${id}`);
  }

  return (
    // <Container onClick={() => handleEdit(pokemon.id)}>
    <Container>
      {/* <Link to={`/detail/${pokemon.id}`}> */}
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        onClick={() => {
          handleEdit(pokemon.id);
        }}
      />
      <Title>
        <Number>{pokemon.number}</Number>
        <Name>{pokemon.name}</Name>
      </Title>
      <Title>
        <Number>{pokemon.number}</Number>
        <Name>{pokemon.name}</Name>
      </Title>
      {/* </Link> */}
    </Container>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default withRouter(PokemonCard);
