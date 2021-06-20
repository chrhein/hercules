import React from 'react';
import { Box, Flex, Image } from 'rebass/styled-components';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import markdownRenderer from '../components/MarkdownRenderer';
import { BackgroundPadding } from '../components/Shadows';

const ProfilePicture = styled(Image)`
  border-radius: 18px;
`;

const About = () => (
  <Section.Container id="about">
    <Section.Header name="About me" label="person" />

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
          <Fade triggerOnce direction="up">
            <BackgroundPadding>
              <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <Box
                  width={[1, 1, 3 / 6]}
                  px={[1, 2, 4]}
                  paddingLeft="12px"
                  paddingRight="12px"
                >
                  <ReactMarkdown
                    source={aboutQuery.markdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                </Box>
                <Box
                  width={[1, 1, 2 / 6]}
                  style={{
                    maxWidth: '300px',
                    margin: 'auto',
                  }}
                >
                  <ProfilePicture
                    // eslint-disable-next-line global-require
                    src={require('../assets/images/pb.png')}
                    alt="Christian Hein"
                    mt={[4, 4, 0]}
                    ml={[0, 0, 1]}
                  />
                </Box>
              </Flex>
            </BackgroundPadding>
          </Fade>
        );
      }}
    />
  </Section.Container>
);

export default About;
