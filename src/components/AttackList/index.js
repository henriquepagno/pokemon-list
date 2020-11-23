import React from 'react';
import PropTypes from 'prop-types';
import { Scope } from '@unform/core';

import Input from '../Input';

import { DataContainer } from './styles';

function AttackList({ attacks }) {
  return (
    <Scope path="attacks">
      {attacks &&
        attacks.special.map((attack, index) => {
          return (
            <Scope key={attack.name} path={`special[${index}]`}>
              <DataContainer>
                <Input
                  name="name"
                  type="text"
                  label="Attack name"
                  placeholder="Pokémon's attack name"
                />
                <Input
                  name="damage"
                  type="text"
                  label="Damage"
                  placeholder="Pokémon's attack damage"
                />
              </DataContainer>
            </Scope>
          );
        })}
    </Scope>
  );
}

AttackList.propTypes = {
  attacks: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

AttackList.defaultProps = {
  attacks: '',
};

export default AttackList;
