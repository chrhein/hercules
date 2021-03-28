import React, { Fragment } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Box, Flex, Heading } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { SectionShadow } from '../components/Shadows';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home">
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
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="header"
              fontSize={[5, 7]}
              mb={[3, 4, 5]}
            >
              {`Hi, I'm ${name}.`}
            </Heading>
            <Fragment>
              <Fade bottom>
                <SectionShadow>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    style={centerHorizontally}
                  >
                    {socialLinks.map(({ id, ...rest }) => (
                      <Box
                        mx={3}
                        fontSize={[4, 5, 5]}
                        key={id}
                        style={centerHorizontally}
                        maxWidth="fit-content"
                        paddingLeft="12px"
                        paddingRight="12px"
                      >
                        <SocialLink color="primaryText" {...rest} />
                      </Box>
                    ))}
                  </Flex>
                </SectionShadow>
              </Fade>
            </Fragment>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
