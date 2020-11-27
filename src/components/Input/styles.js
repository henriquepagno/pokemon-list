import styled from 'styled-components';

import Colors from '../../styles/Constants';

export const Container = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    color: ${Colors.darkGray};
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid ${Colors.darkGray};
    border-radius: 4px;
    height: 40px;
    padding: 0 10px;
    color: ${Colors.darkGray};
    margin: 0 0 5px;
    width: 100%;

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  span {
    color: ${Colors.red};
    align-self: center;
    font-size: 12px;
  }
`;
