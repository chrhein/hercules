import React from 'react';
import { Box, Flex, Image } from 'rebass/styled-components';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['5vh', '5vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />


    <Triangle
      color="secondaryLight"
      height={['10vh', '10vh']}
      width={['60vw', '60vw']}
      invertY
    />

    <Triangle
      id="secondaryLightOnTablet"
      color="primaryDark"
      height={['20vh', '10vh']}
      width={['75vw', '100vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />

  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋🏻‍♂️" label="person" />
    <StaticQuery
      query={graphql`
        query aboutQuery {
          markdownRemark(frontmatter: { mdName: { eq: "aboutmd" } }) {
            rawMarkdownBody
          }
        }
      `}
      render={(aboutQuery) => {
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 3 / 6]} px={[1, 2, 4]}>
              <Fade>
                <ReactMarkdown
                  source={aboutQuery.markdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>
            <Box width={[1, 1, 1 / 6]} style={{ maxWidth: '300px', margin: 'auto' }} />
            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade>
                <ProfilePicture
                  src={require('../assets/images/pb.png')}
                  alt={'Christian Hein'}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
