import React from 'react';
import { Scope } from '@unform/core';

import Input from '../Input';

import { Table } from './styles';

interface Attack {
  name: string;
  damage: number;
}

export interface AttacksArray {
  attacks: {
    special: Attack[];
  };
}

function AttackList({ attacks }: AttacksArray) {
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
            attacks.special.map((attack: Attack, index: number) => {
              return (
                <tr key={attack.name}>
                  <Scope path={`special[${index}]`}>
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
                  </Scope>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Scope>
  );
}

export default AttackList;
