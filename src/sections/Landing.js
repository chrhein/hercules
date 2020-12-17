import React, { Fragment } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color={({ theme }) => theme.backgroundDark}
      height={['35vh', '75vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color={({ theme }) => theme.secondary}
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color={({ theme }) => theme.primaryDark}
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color={({ theme }) => theme.backgroundDark}
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const Delay = styled.div`
  @include fade-in('5000ms');
  @mixin fade-in($waitTime) {
    animation: wait #{$waitTime}, fade-in 1000ms #{$waitTime};
  }

  @keyframes wait {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

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
        const fixedOrder = false;
        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color={({ theme }) => theme.primary}
              fontSize={[5, 7]}
              mb={[3, 4, 5]}
            >
              {`Hi, I'm ${name}.`}
            </Heading>

            <Heading
              as="h2"
              color={({ theme }) => theme.primaryLight}
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
