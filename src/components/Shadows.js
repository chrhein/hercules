import styled from 'styled-components';

const SectionBackground = styled.div`
  z-index: -1;
  border-radius: 18px;
  content-visibility: auto;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 5vw;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  ${(props) => {
    const backgroundcolor = props.theme.colors[props.color];
    return `background-color: ${backgroundcolor};`;
  }}
`;

export const SectionShadow = styled.div`
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  width: fit-content;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;

  ${(props) => {
    const backgroundcolor = props.theme.colors[props.color];
    return `background-color: ${backgroundcolor};`;
  }}
`;

export const HeaderShadow = styled(SectionShadow)`
  box-shadow: 0;
  width: 100%;
  padding: 0;
  border-radius: 0 0 18px 18px;
  backdrop-filter: blur(20px);
`;

export const HeaderShade = styled.div`
  background-color: ${({ theme }) => theme.colors.menuBar};
  border-radius: 0 0 18px 18px;
  opacity: 0.75;
`;

export default SectionBackground;
