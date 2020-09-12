import React from 'react';
import { Box, Heading } from 'rebass/styled-components';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const LoadingTrailingDots = styled.div`
    .appendMovingDots:after {
        content: ' .';
        animation: dots 3s steps(1, end) infinite;
    }
    @keyframes dots {
        0%, 20% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
        60% {
            text-shadow: .5em 0;
        }
        80% {
            text-shadow: .5em 0, 1em 0;
        }
        100% {
            text-shadow: .5em 0, 1em 0;
        }
`;

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading
          color="primaryDark"
          fontSize={['8rem', '12rem', '14rem']}
          as="h1"
        >
          404
        </Heading>
        <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']} as="h2">
          <LoadingTrailingDots>
            <span className="appendMovingDots">Something went wrong</span>
          </LoadingTrailingDots>
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

export default NotFoundPage;
