import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #666;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  background: lightblue;
`;

export const Number = styled.span`
  font-weight: bold;
  color: #444;
  margin-right: 10px;
  font-size: 16px;
`;

export const Name = styled.span`
  font-weight: bold;
  color: #444;
  font-size: 16px;
`;
