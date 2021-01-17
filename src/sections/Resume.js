import React from 'react';
import { Flex, Image } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Triangle from '../components/Triangle';
import Section from '../components/Section';
import Education from '../data/resume-pages/Education';
import Experience from '../data/resume-pages/Experience';
import VolunteerExperience from '../data/resume-pages/VolunteerExperience';
import { darkTheme, lightTheme } from '../styles/Theme';
import Airplane, { Clouds } from '../assets/svgs/Icons';

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
  border: solid 4px ${({ theme }) => theme.colors.resumePhotoBorder};

  &:hover {
    // border-radius: 20%;
    border: solid 10px ${({ theme }) => theme.colors.resumePhotoBorder};
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
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 10%;
`;


function Resume({ theme }) {
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <Section.Container id="Resume" Background={Background}>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <div>
          <Fade>
            <ProfilePicture
              src={require('../assets/images/cv-pb-sq.png')}
              alt={'Christian Hein'}
            />
          </Fade>
          <Education />
          <Experience />
          <VolunteerExperience />

          <SvgWrapper>
            <CloudDiv>
              <Clouds cloudColor={themeMode.colors.clouds} />
            </CloudDiv>
            <AircraftDiv>
              <Fade right>
                <Airplane
                  airplaneColor={themeMode.colors.airplane}
                  airplaneBottomColor={themeMode.colors.airplaneBottom}
                />
              </Fade>
            </AircraftDiv>
          </SvgWrapper>

        </div>
      </Flex>
    </Section.Container>
  );
}

Resume.propTypes = {
  theme: PropTypes.string,
};

export default Resume;