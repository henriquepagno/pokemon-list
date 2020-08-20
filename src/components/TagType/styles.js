import styled from 'styled-components';

import Colors from '../../styles/Constants';

export const Container = styled.div`
  border-radius: 5px;
  margin-top: 5px;
  background: ${(props) => props.color};

  padding: 2px 5px;
`;

export const Type = styled.p`
  font-weight: bold;
  color: ${Colors.white};
  font-size: 12px;
`;
