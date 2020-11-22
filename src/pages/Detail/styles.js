import styled from 'styled-components';

import Colors from '../../styles/Constants';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: white;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  padding-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
`;

export const Classification = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${Colors.darkGray};
  font-style: italic;
  font-size: 14px;
`;

export const Number = styled.span`
  color: ${Colors.lightBlack};
  font-size: 16px;
`;

export const Name = styled.span`
  font-weight: bold;
  color: ${Colors.lightBlack};
  font-size: 20px;
`;

export const Image = styled.img`
  height: 200px;
  width: 200px;
  padding: 15px 15px;
  border: 1px solid ${Colors.lightGray};
  border-radius: 10px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;

  div:not(:first-child) {
    margin-left: 10px;
  }
`;
