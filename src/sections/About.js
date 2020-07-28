import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import Hide from '../components/Hide';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Background = () => (
  <div>
    <Hide query={MEDIA_QUERY_SMALL}>
      <Triangle
        color="secondaryLight"
        height={['50vh', '20vh']}
        width={['50vw', '50vw']}
        invertY
      />
    </Hide>

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
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
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about me" Background={Background}>
    <Section.Header name="About me" icon="🙋🏻‍♂️" label="person" />
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { mdName: { eq: "aboutmd" } }) {
            rawMarkdownBody
          }
        }
      `}
      render={(data) => {
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={data.markdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
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
