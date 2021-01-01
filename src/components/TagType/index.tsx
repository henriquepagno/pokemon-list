import React from 'react';
import { toLower } from 'lodash';
import PropTypes from 'prop-types';

import { Container, Type } from './styles';

import { TagColors } from '../../styles/Constants';

interface Parameters {
  type: string;
}

export default function TagType({ type }: Parameters) {
  function getColor(typeColor) {
    return TagColors[toLower(typeColor)];
  }

  return (
    <Container color={getColor(type)}>
      <Type>{type}</Type>
    </Container>
  );
}

TagType.propTypes = {
  type: PropTypes.string.isRequired,
};
