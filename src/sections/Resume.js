import React from 'react';
import { Flex } from 'rebass/styled-components';
import Triangle from '../components/Triangle';
import Section from '../components/Section';
import Education from '../data/resume-pages/Education';
import FormattedResume from '../components/ResumeFormatter';
import Experience from '../data/resume-pages/Experience';
import Volunteer from '../data/resume-pages/Volunteer';

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


function Resume({ theme }) {
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <Section.Container id="Resume" Background={Background}>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <FormattedResume>
          <Education />
          <Experience />
          <Volunteer />
        </FormattedResume>
      </Flex>
    </Section.Container>
  );
}

export default Resume;