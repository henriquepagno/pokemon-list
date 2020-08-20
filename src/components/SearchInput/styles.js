import styled from 'styled-components';

import Colors from '../../styles/Constants';

export const Container = styled.div`
  background: ${Colors.white};
  display: flex;
  align-items: center;
  width: 500px;
  border-radius: 4px;
  border: 1px ${Colors.darkGray} solid;
  margin-bottom: 30px;

  svg {
    margin-left: 7px;
  }

  input {
    border: 0;
    padding: 7px 5px;
    width: 85%;
    font-size: 14px;
  }
`;
