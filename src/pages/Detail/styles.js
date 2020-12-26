import styled from 'styled-components';

import Colors from '../../styles/Constants';

export const Container = styled.div`
  max-width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  flex: 1;
  border-radius: 10px;
  padding: 15px;

  @media (max-width: 936px) {
    overflow: auto;
    position: relative;
    max-height: 80%;
    margin: 10px auto;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 936px) {
    flex-direction: column;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const RowStatContainer = styled(RowContainer)`
  div:last-child {
    margin-left: 5%;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fff;
`;

export const StatsContainer = styled.div`
  border: 2px solid ${Colors.blue};
  margin-top: 60px;
  padding: 15px 15px;
  border-radius: 10px;

  @media (max-width: 936px) {
    margin-top: 0px;
    margin-bottom: 15px;
  }
`;

export const EvolutionContainer = styled(StatsContainer)`
  margin: 20px 20px;
`;

export const MarginContainer = styled.div`
  margin: 20px 20px;
  display: flex;
  flex-diretion: row;

  @media (max-width: 936px) {
    flex-direction: column;
  }
`;

export const SaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 40px;

  span:not(:first-child) {
    margin-left: 10px;
  }
`;

export const TitleRowContainer = styled(RowContainer)`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Classification = styled.span`
  display: flex;
  color: ${Colors.darkGray};
  font-style: italic;
  font-size: 1.4rem;
  height: 100%;
  align-items: flex-end;
`;

export const Number = styled.span`
  color: ${Colors.lightBlack};
  font-size: 1.6rem;
`;

export const Name = styled.span`
  font-weight: bold;
  color: ${Colors.lightBlack};
  font-size: 2rem;
`;

export const Image = styled.img`
  height: 300px;
  width: 300px;
  padding: 15px 15px;
  border-radius: 10px;

  @media (max-width: 936px) {
    height: 65%;
    width: 65%;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;

  div:not(:first-child) {
    margin-left: 10px;
  }
`;

export const ContainerTitle = styled.h3`
  color: ${Colors.lightBlack};
  font-weight: bold;
  padding-bottom: 5px;
`;

export const Button = styled.button`
  background: ${Colors.blue};
  color: ${Colors.white};
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px ${Colors.blue} solid;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 8px 15px;
  transition: transform 0.01s;

  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

export const Arrow = styled.p`
  width: 0px;
  height: 0px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${Colors.blue};
  align-self: center;
  margin: 0px 20px;

  @media (max-width: 936px) {
    margin-top: 15px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${Colors.blue};
  }
`;
