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
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: null,
    };
  }

  componentWillMount = () => {
    this.windowWidth;
  };

  componentDidMount = () => {
    if (typeof window !== undefined) {
      this.setState({ windowWidth: window.innerWidth });
    }
  };

  Background = () => (
    <div>
      <Triangle
        id="backgroundDarkOnTablet"
        color="secondaryLight"
        height={['50vh', '20vh']}
        width={['50vw', '50vw']}
        invertY
      />

      <Triangle
        id="secondaryLightOnTablet"
        color="primaryDark"
        height={['20vh', '20vh']}
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

  ProfilePicture = styled(Image)`
    border-radius: 50%;
    transition: all 0.25s ease-out;

    &:hover {
      border-radius: 20%;
    }
  `;

  render() {
    if (!this.state.windowWidth) {
      return <div>Loading</div>;
    }
    return (
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
                  width={[1, 1, 4 / 6]}
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
  }
}

export default AboutMe;
