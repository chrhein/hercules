import styled from 'styled-components';

const SectionBackground = styled.div`
  z-index: -1;
  border-radius: 18px;
  content-visibility: auto;

  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.projectCard};
`;

export const SectionShadow = styled.div`
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  width: -moz-fit-content;
  width: fit-content;
  min-width: 250px;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.projectCard};
  @media only screen and (max-width: 600px) {
    min-width: 200px;
  }
`;

export const BackgroundPadding = styled(SectionBackground)`
  padding: 40px;
  margin: auto;
  margin-bottom: 120px;
  @media only screen and (max-width: 900px) {
    padding: 10px;
    margin-bottom: 200px;
    padding-bottom: 40px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0px;

    ul {
      margin-left: 1em;
      padding-left: 0;
    }
  }
`;

export default SectionBackground;
