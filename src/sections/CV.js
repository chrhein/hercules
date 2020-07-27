import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

import { Component } from 'react';
import Education from '../cv/Education';
import Experience from '../cv/Experience';
import Positions from '../cv/Positions';

const Background = () => (
  <div>
    <Triangle
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

class CV extends Component {
  render() {
    return (
      <Section.Container id="CV" Background={Background}>
        <Section.Header name="CV" icon="🙋‍♂️" label="person" />
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
            <Education />
            <br />
            <Experience />
            <br />
            <Positions />
            <br />
          </Box>
          <Box
            width={[1, 1, 2 / 6]}
            style={{ maxWidth: '300px', margin: 'auto' }}
          >
            <Fade right></Fade>
          </Box>
        </Flex>
      </Section.Container>
    );
  }
}

export default CV;
