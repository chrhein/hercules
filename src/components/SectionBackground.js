import styled from 'styled-components';

const SectionBackground = styled.div`
  z-index: -1;
  border-radius: 18px;
  content-visibility: auto;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 5vw;
  box-shadow: 0px 0px 10px 3px red, 0px 0px 10px 3px blue;

  ${(props) => {
    const backgroundcolor = props.theme.colors[props.color];
    return `background-color: ${backgroundcolor};`;
  }}
`;

export const SectionShadow = styled.div`
  border-radius: 18px;
  box-shadow: 0px 0px 10px 3px red, 0px 0px 10px 3px blue;
  width: fit-content;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;

  ${(props) => {
    const backgroundcolor = props.theme.colors[props.color];
    return `background-color: ${backgroundcolor};`;
  }}
`;

export default SectionBackground;
