import styled from 'styled-components';
import { SectionLink } from 'react-scroll-section';
import MouseIcon from '../components/MouseIcon';
import Fade from 'react-reveal/Fade';
import Delay from '../components/Delay';
import React from 'react';

const StyledDiv = styled.div`
  position: absolute;
  bottom: -250px;
  margin: 0 auto;
  left: 0;
  width: 100%;
  height: 10px;
`;

export default function Pappa() {
  return (
    <StyledDiv>
      <SectionLink section="about">
        {({ onClick }) => <MouseIcon onClick={onClick} />}
      </SectionLink>
    </StyledDiv>
  );
}
