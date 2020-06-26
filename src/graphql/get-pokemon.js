import gql from 'graphql-tag';

export const GET_POKEMON_BY_NAME = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
