import React from 'react';
import { Flex } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import Section from '../components/Section';
import Education from '../data/resume-pages/Education';
import Experience from '../data/resume-pages/Experience';
import VolunteerExperience from '../data/resume-pages/VolunteerExperience';

function Resume({ theme }) {
  return (
    <Section.Container id="resume">
      <Section.Header name="Resume" label="resume" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Education />
        <Experience />
        <VolunteerExperience theme={theme} />
      </Flex>
    </Section.Container>
  );
}

Resume.propTypes = {
  theme: PropTypes.string,
};

export default Resume;
