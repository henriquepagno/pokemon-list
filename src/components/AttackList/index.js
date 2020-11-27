import React from 'react';
import PropTypes from 'prop-types';
import { Scope } from '@unform/core';

import Input from '../Input';

import { Table } from './styles';

function AttackList({ attacks }) {
  return (
    <Scope path="attacks">
      <Table>
        <thead>
          <tr>
            <th>Attack name</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody>
          {attacks &&
            attacks.special.map((attack, index) => {
              return (
                <tr key={attack.name}>
                  <Scope path={`special[${index}]`}>
                    {/* <DataContainer> */}
                    <td>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Pokémon's attack name"
                      />
                    </td>
                    <td>
                      <Input
                        name="damage"
                        type="text"
                        placeholder="Pokémon's attack damage"
                      />
                    </td>

                    {/* <Input
                  name="name"
                  type="text"
                  label={index === 0 ? 'Attack name' : null}
                  placeholder="Pokémon's attack name"
                /> */}
                    {/* <Input
                  name="damage"
                  type="text"
                  label={index === 0 ? 'Damage' : null}
                  placeholder="Pokémon's attack damage"
                /> */}
                    {/* </DataContainer> */}
                  </Scope>
                </tr>
              );
            })}
        </tbody>
      </Table>
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
