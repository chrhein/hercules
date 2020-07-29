import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '75vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
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
        const { name, socialLinks, roles } = landingInfoJson;

        console.log(roles);

        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[5, 7]}
              mb={[3, 4, 5]}
            >
              {`Hi, I'm ${name}!`}
            </Heading>

            <Heading
              as="h2"
              color="primaryLight"
              fontSize={[3, 5]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              <TextLoop interval={5000}>
                {roles.map((text) => (
                  <Text width={[300, 500]} key={text}>
                    {text}
                  </Text>
                ))}
              </TextLoop>
            </Heading>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[4, 5, 5]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
