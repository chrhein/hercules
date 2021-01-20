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
  box-shadow: 0 0 0px 3px ${({ theme }) => theme.colors.projectCard};
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 15px;
  padding-top: 3px;

  
  &:hover {
    top: -5px;
    box-shadow: 0 8px 8px 4px ${({ theme }) => theme.colors.projectCardHoverShadow};
    // background: ${({ theme }) => theme.colors.secondaryLight};
    
  }
  
`;

export default Card;
