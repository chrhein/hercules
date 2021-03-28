import React from 'react';
import { Box, Heading } from 'rebass/styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404">
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="heading" fontSize={['8rem', '12rem', '14rem']} as="h1">
          404
        </Heading>
        <Heading
          color="primaryText"
          fontSize={['4rem', '5rem', '6rem']}
          as="h2"
        >
          <span className="appendMovingDots">Something went wrong</span>
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

export default NotFoundPage;
