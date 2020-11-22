import styled from 'styled-components';

import Colors from '../../styles/Constants';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    color: ${Colors.darkGray}
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid ${Colors.darkGray};
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: ${Colors.gray};
    margin: 0 0 10px;
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
