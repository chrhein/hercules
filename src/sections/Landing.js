import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Box, Flex, Heading } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { SectionShadow } from '../components/Shadows';
import { LandingPageSVG } from '../assets/svgs/Icons';
import { darkTheme, lightTheme } from '../styles/Theme';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingSVG = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-top: 50px;
  margin-left: 80px;

  @media (max-width: 1200px) {
    transform: scale(0.8);
    margin-left: 0px;
  }
  @media (max-width: 831px) {
    transform: scale(0.6);
    margin-top: -140px;
  }
`;

const LandingWrapper = styled.div`
  overflow-x: hidden;
`;

function LandingPage({ theme, themeToggler }) {
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <LandingWrapper>
      <Section.Container id="home">
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <LandingSVG>
            <LandingPageSVG
              primary={themeMode.colors.primary}
              desk={themeMode.colors.secondary}
              hair="#655554"
              skin="#ecbcb4"
              shoes={themeMode.colors.secondaryLight}
              pants={themeMode.colors.footer}
              sweater={themeMode.colors.secondaryLight}
              logo="#ffffff"
              flower="#e6e6e6"
              apple="#ff6584"
              toggler={themeToggler}
            />
          </LandingSVG>
          <StaticQuery
            query={graphql`
              query landingInfoQuery {
                landingInfoJson {
                  name
                  roles
                  socialLinks {
                    id
                    url
                    name
                    fontAwesomeIcon
                  }
                }
              }
            `}
            render={({ landingInfoJson }) => {
              const { name, socialLinks } = landingInfoJson;
              return (
                <Box width={[1, 1, 3 / 6]} minWidth="400px" px={[1, 2, 4]}>
                  <Heading
                    textAlign="center"
                    as="h1"
                    color="header"
                    fontSize={[5, 7]}
                    mb={[3, 4]}
                  >
                    {`Hi, I'm ${name}.`}
                  </Heading>
                  <Fade triggerOnce direction="up">
                    <SectionShadow>
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        style={centerHorizontally}
                      >
                        {socialLinks.map(({ id, ...rest }) => (
                          <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                            <SocialLink color="primaryText" {...rest} />
                          </Box>
                        ))}
                      </Flex>
                    </SectionShadow>
                  </Fade>
                </Box>
              );
            }}
          />
        </Flex>
      </Section.Container>
    </LandingWrapper>
  );
}

LandingPage.propTypes = {
  theme: PropTypes.string,
  themeToggler: PropTypes.func,
};

export default LandingPage;
