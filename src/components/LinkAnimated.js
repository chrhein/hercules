import styled from 'styled-components';

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  ${(props) =>
          props.selected &&
          `
          border-bottom: 2px solid ${props.theme.colors.headerText};
          `};
  
  transition: 0.4s ease-in-out;
  transition-property: border-bottom-width;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  outline: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.clouds};
  }

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
