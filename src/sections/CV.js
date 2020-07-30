import React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

import { Component } from 'react';
import Education from '../cv/Education';
import Experience from '../cv/Experience';
import VolunteerEx from '../cv/VolunteerEx';

import styled from 'styled-components';

class CV extends Component {
  componentDidMount = () => {
    if (typeof window !== undefined) {
      this.setState({ windowWidth: window.innerWidth });
      var screenWidth = window.innerWidth;
      var MEDIA_QUERY_S = screenWidth < 400 ? true : false;
    }
  };

  StyledParagraph = styled.p`
    line-height: 2em;
    &:first-child {
      margin-top: 0em;
    }
  `;

  Background = () => (
    <div>
      {this.MEDIA_QUERY_S ? (
        <Triangle
          color="secondaryLight"
          height={['15vh', '10vh']}
          width={['100vw', '100vw']}
          invertX
        />
      ) : (
        <Triangle
          color="backgroundDark"
          height={['15vh', '10vh']}
          width={['100vw', '100vw']}
          invertX
        />
      )}

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
  render() {
    return (
      <Section.Container id="CV" Background={this.Background}>
        <Section.Header name="CV" icon="👨🏻‍🎓" label="person" />
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
            <this.StyledParagraph>
              <Education />
              <br />
              <Experience />
              <br />
              <VolunteerEx />
              <br />
            </this.StyledParagraph>
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
