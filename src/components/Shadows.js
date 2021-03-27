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
  width: fit-content;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.projectCard};
`;

export default SectionBackground;
