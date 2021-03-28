import styled from 'styled-components';

const SectionBackground = styled.div`
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SectionShadow = styled.div`
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  width: -moz-fit-content;
  width: fit-content;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BackgroundPadding = styled(SectionBackground)`
  padding: 40px;
  padding-bottom: 20px;
  margin: auto;
  margin-bottom: 60px;
  z-index: -1;
  @media only screen and (max-width: 500px) {
    padding: 5px;
    padding-bottom: 40px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 40px;

    ul {
      margin-left: 1em;
      padding-left: 0;
    }
  }
`;

export default SectionBackground;
