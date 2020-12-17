import React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Education from '../cv/Education';
import Experience from '../cv/Experience';
import VolunteerEx from '../cv/VolunteerEx';

import Aircraft from '../assets/svgs/aircraft';
import Clouds from '../assets/svgs/clouds';

const StyledParagraph = styled.p`
  line-height: 2em;
  &:first-child {
    margin-top: 0em;
  }
`;

const AircraftDiv = styled.div`
  position: absolute;
  left: 10%;
  right: -10%;
  z-index: 0;  
  height: 100%;
  @media (max-width: 1026px) {
    bottom: 13%;
  }
`;

const CloudDiv = styled.div`
  position: absolute;
  z-index: -1;
  left: -5%;
  right: 5%;
  height: 100%;
  @media (max-width: 1026px) {
    bottom: 13%;
  }
`;

const SvgWrapper = styled.div`
  position: relative;
  max-width: 400px;
  min-height: 200px;
`;


const Background = () => (
  <div>
    <Triangle
      id="secondaryLightOnTabletAndMobile"
      color={({ theme }) => theme.backgroundDark}
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color={({ theme }) => theme.secondaryLight}
      height={['8vh', '10vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color={({ theme }) => theme.primaryDark}
      height={['10vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

function CV() {
  return (
    <Section.Container id="CV" Background={Background}>
      <Section.Header name="CV" icon="👨🏻‍🎓" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
          <StyledParagraph>
            <Education />
            <br />
            <Experience />
            <br />
            <VolunteerEx />
            <br />
          </StyledParagraph>
        </Box>
        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <SvgWrapper>
            <CloudDiv>
              <Clouds />
            </CloudDiv>
            <AircraftDiv>
              <Fade right>
                <Aircraft />
              </Fade>
            </AircraftDiv>
          </SvgWrapper>
        </Box>
      </Flex>
    </Section.Container>
  );
}

export default CV;
