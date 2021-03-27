import styled from 'styled-components';

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  outline: none;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonHover};
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
`;

export default LinkAnimated;
