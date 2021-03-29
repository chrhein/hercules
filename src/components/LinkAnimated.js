import styled from 'styled-components';

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  transition: 0.2s;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  outline: none;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -3px;
    background: ${(props) => props.theme.colors.secondaryLight};
    height: 3px;
    border-radius: 5px;
    transition-property: width;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }

  &:focus:after,
  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
    outline: none;
  }

  &:hover {
  }
`;

export const TextLink = styled(LinkAnimated)`
  color: ${(props) => props.theme.colors.secondaryText};
  cursor: pointer;
`;

export default LinkAnimated;
