import React from 'react';
import { toLower } from 'lodash';

import { Container, Type } from './styles';

import { TagColors } from '../../styles/Constants';

interface Parameters {
  type: string;
}

export default function TagType({ type }: Parameters) {
  function getColor(typeColor: string) {
    return TagColors[toLower(typeColor)];
  }

  return (
    <Container color={getColor(type)}>
      <Type>{type}</Type>
    </Container>
  );
}
