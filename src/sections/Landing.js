import React, { Fragment } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '60vh']}
      width={['95vw', '30vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '40vh']}
      width={['50vw', '50vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '20vh']}
      width={['75vw', '65vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '10vh']}
      width={['75vw', '100vw']}
      invertY
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
        const fixedOrder = true;
        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[5, 7]}
              mb={[3, 4, 5]}
            >
              {`Hi, I'm ${name}.`}
            </Heading>

            <Heading
              as="h2"
              color="primaryLight"
              fontSize={[3, 5]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              <TextLoop interval={4000}>
                {roles
                  .sort(() => fixedOrder || Math.random() - 0.5)
                  .map((text) => (
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
