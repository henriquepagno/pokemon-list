import React from 'react';

import logo from '../../assets/Pokeball.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" height="80px" width="80px" />
    </Container>
  );
}
