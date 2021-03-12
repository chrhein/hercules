import styled from 'styled-components';

const SectionBackground = styled.div`
  z-index: -2;
  border-radius: 18px;
  content-visibility: auto;
  padding-top: 24px;
  padding-bottom: 24px;

  ${(props) => {
    const backgroundcolor = props.theme.colors[props.color];
    return `background-color: ${backgroundcolor};`;
  }}
`;

export default SectionBackground;
