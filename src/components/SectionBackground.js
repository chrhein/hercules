import styled from 'styled-components';

const SectionBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 95%;
  margin: auto;
  z-index: -2;
  border-radius: 18px;
  padding-left: 40px;
  content-visibility: auto;
  ${(props) => {
    const backgroundcolor = props.theme.colors[props.color];
    return `background-color: ${backgroundcolor};`;
  }}
`;

export default SectionBackground;
