import styled from 'styled-components';
import { Card as CardRebass } from 'rebass/styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 40px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Card = styled(CardRebass).attrs({
  bg: 'projectCard',
  boxShadow: 0,
})`
  position: relative;
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 15px;
  padding-top: 3px;

  .trafficMenuBar {
    position: absolute;
    margin-top: -5px;
    padding-top: 3px;
    height: 23px;
    width: 100%;
    background-color: #1a1a1a;
    border-radius 15px 15px 0 0;
  }
  
  .trafficLight {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 6px;
  }

.trafficRed {
  background-color: #f85f57;
  margin-left: 10px;
}

.trafficYellow {
  background-color: #fabc2e;
}

.trafficGreen {
  background-color: #35c840;
}

  
  &:hover {
    top: -5px;
    box-shadow: 0 8px 8px 4px ${({ theme }) =>
      theme.colors.projectCardHoverShadow};
    // background: ${({ theme }) => theme.colors.secondaryLight};
    
  }
  
`;

export default Card;
