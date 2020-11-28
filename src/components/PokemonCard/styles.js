import styled from 'styled-components';

import Colors from '../../styles/Constants';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
  padding: 15px 15px;
  background: ${Colors.white};
  border-radius: 10px;
  box-shadow: 2px 2px 8px 1px ${Colors.darkGray};

  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;

  padding-bottom: 20px;
  border-bottom: 2px solid ${Colors.lightGray};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;
`;

export const Number = styled.span`
  color: ${Colors.lightBlack};
  font-size: 14px;
`;

export const Name = styled.span`
  font-weight: bold;
  color: ${Colors.lightBlack};
  font-size: 16px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  div:not(:first-child) {
    margin-left: 10px;
  }
`;
