import styled from 'styled-components';

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 4px;
  color: inherit;
  ${(props) =>
          props.selected &&
          `
          color: ${props.theme.colors.buttonHover};
          `};
  ${(props) =>
          props.selected && props.name==='Home' &&
          `
          border-bottom: 0px solid ${props.theme.colors.button};
          color: ${props.theme.colors.clouds};
          `};
  
  transition: 0.4s ease-in-out;
  transition-property: border-bottom-width;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  outline: none;
  
  &:hover {
    // border-bottom: 4px solid ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.buttonHover};
    ${(props) =>
            props.selected && props.name==='Home' &&
            `
          color: ${props.theme.colors.projectCardHoverShadow};
          `};
  }

  /*
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -4px;
    background: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.text};
    height: 4px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    outline: none;
  }
  
   */

  &:focus {
    left: 0;
    right: auto;
    width: 100%;
  }

  &:focus:after,
  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export default LinkAnimated;
