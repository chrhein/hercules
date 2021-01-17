import React from 'react';
import { Box, Flex, Image } from 'rebass/styled-components';
import Triangle from '../components/Triangle';
import Section from '../components/Section';
import Education from '../data/resume-pages/Education';
import FormattedResume from '../components/ResumeFormatter';
import Experience from '../data/resume-pages/Experience';
import Skills from '../data/resume-pages/Skills';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import VolunteerExperience from '../data/resume-pages/VolunteerExperience';

const Background = () => (
  <div>
    <Triangle
      id="secondaryLightOnTabletAndMobile"
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['8vh', '10vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['10vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const ProfilePicture = styled(Image)`
  margin-top: 25px;
  max-height: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  transition: all 0.25s ease-out;
  border: solid 3px red;

  &:hover {
    border-radius: 20%;
  }
`;


function Resume({ theme }) {
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <Section.Container id="Resume" Background={Background}>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">



        <FormattedResume>
          <Fade>
            <ProfilePicture
              src={require('../assets/images/cv-pb-sq.png')}
              alt={'Christian Hein'}
            />
          </Fade>
          <Education />
          <Experience />
          <VolunteerExperience />
        </FormattedResume>
      </Flex>
    </Section.Container>
  );
}

export default Resume;