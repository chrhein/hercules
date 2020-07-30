import React, { Component } from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

class AboutMe extends Component {
  componentDidMount = () => {
    if (typeof window !== undefined) {
      this.setState({ windowWidth: window.innerWidth });
      var screenWidth = window.innerWidth;
      var MEDIA_QUERY_SMALL = screenWidth < 400 ? true : false;
      var MEDIA_QUERY_LARGE = screenWidth > 1200 ? true : false;
      var MEDIA_QUERY_MEDIUM =
        !MEDIA_QUERY_SMALL && !MEDIA_QUERY_LARGE ? true : false;
    }
  };
  Background = () => (
    <div>
      {this.MEDIA_QUERY_SMALL ? (
        <Triangle
          color="backgroundDark"
          height={['50vh', '20vh']}
          width={['50vw', '50vw']}
          invertY
        />
      ) : (
        <Triangle
          color="secondaryLight"
          height={['50vh', '20vh']}
          width={['50vw', '50vw']}
          invertY
        />
      )}

      {this.MEDIA_QUERY_MEDIUM ? (
        <Triangle
          color="secondaryLight"
          height={['20vh', '40vh']}
          width={['75vw', '70vw']}
          invertX
        />
      ) : (
        <Triangle
          color="primaryDark"
          height={['20vh', '40vh']}
          width={['75vw', '70vw']}
          invertX
        />
      )}

      <Triangle
        color="backgroundDark"
        height={['25vh', '20vh']}
        width={['100vw', '100vw']}
      />
    </div>
  );

  ProfilePicture = styled(Image)`
    border-radius: 50%;
    transition: all 0.25s ease-out;

    &:hover {
      border-radius: 20%;
    }
  `;

  About = () => (
    <Section.Container id="about" Background={this.Background}>
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
              <Box
                width={[1, 1, 3 / 6]}
                px={[1, 2, 4]}
                style={{ maxWidth: '750px' }}
              >
                <Fade bottom>
                  <ReactMarkdown
                    source={aboutQuery.markdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                </Fade>
              </Box>

              <Box
                width={[1, 1, 2 / 6]}
                style={{ maxWidth: '300px', margin: 'auto' }}
              >
                <Fade right>
                  <this.ProfilePicture
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

  render() {
    return <this.About />;
  }
}

export default AboutMe;
