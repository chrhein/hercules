import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

class Projects extends Component {
  constructor() {
    super();
    var MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

    var CARD_HEIGHT = '200px';
  }

  componentDidMount = () => {
    if (typeof window !== undefined) {
      this.setState({ windowWidth: window.innerWidth });
      var screenWidth = window.innerWidth;
      var MEDIA_QUERY_S = screenWidth < 400 ? true : false;
    }
  };

  Background = () => (
    <div>
      {this.MEDIA_QUERY_S ? (
        <Triangle
          color="backgroundDark"
          height={['80vh', '80vh']}
          width={['100vw', '100vw']}
          invertX
        />
      ) : (
        <Triangle
          color="secondaryLight"
          height={['80vh', '80vh']}
          width={['100vw', '100vw']}
          invertX
        />
      )}

      <Triangle
        color="background"
        height={['50vh', '20vh']}
        width={['50vw', '50vw']}
        invertX
      />

      <Triangle
        color="primaryDark"
        height={['25vh', '40vh']}
        width={['75vw', '60vw']}
        invertX
        invertY
      />

      {this.MEDIA_QUERY_S ? (
        <Triangle
          color="secondaryLight"
          height={['25vh', '20vh']}
          width={['100vw', '100vw']}
          invertY
        />
      ) : (
        <Triangle
          color="backgroundDark"
          height={['25vh', '20vh']}
          width={['100vw', '100vw']}
          invertY
        />
      )}
    </div>
  );

  Title = styled(Text)`
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    display: table;
    border-bottom: ${(props) => props.theme.colors.secondary} 2px solid;
  `;

  TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    width: calc(100% - ${this.CARD_HEIGHT});

    ${this.MEDIA_QUERY_SMALL} {
      width: calc(100% - (${this.CARD_HEIGHT} / 2));
    }
  `;

  ImageContainer = styled.div`
    margin: auto;
    width: ${this.CARD_HEIGHT};

    ${this.MEDIA_QUERY_SMALL} {
      width: calc(${this.CARD_HEIGHT} / 2);
    }
  `;

  ProjectImage = styled(Image)`
    width: ${this.CARD_HEIGHT};
    height: ${this.CARD_HEIGHT};
    padding: 40px;
    margin-top: 0px;

    ${this.MEDIA_QUERY_SMALL} {
      height: calc(${this.CARD_HEIGHT} / 2);
      width: calc(${this.CARD_HEIGHT} / 2);
      margin-top: calc(${this.CARD_HEIGHT} / 4);
      padding: 10px;
    }
  `;

  ProjectTag = styled.div`
    position: relative;
    height: ${this.CARD_HEIGHT};
    top: calc(
      -${this.CARD_HEIGHT} - 3.5px
    ); /*don't know why I have to add 3.5px here ... */

    ${this.MEDIA_QUERY_SMALL} {
      top: calc(-${this.CARD_HEIGHT} - 3.5px + (${this.CARD_HEIGHT} / 4));
    }
  `;

  Project = ({
    name,
    description,
    projectUrl,
    repositoryUrl,
    type,
    publishedDate,
    logo,
  }) => (
    <Card p={0}>
      <Flex style={{ height: this.CARD_HEIGHT }}>
        <this.TextContainer>
          <span>
            <this.Title my={2} pb={1} color="text">
              {name}
            </this.Title>
          </span>
          <Text width={[1]} style={{ overflow: 'auto' }} color="text">
            {description}
          </Text>
        </this.TextContainer>

        <this.ImageContainer>
          <this.ProjectImage src={logo.image.src} alt={logo.title} />
          <this.ProjectTag>
            <Flex
              style={{
                float: 'right',
              }}
            >
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="github"
                  url={repositoryUrl}
                />
              </Box>
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="See project"
                  fontAwesomeIcon="globe"
                  url={projectUrl}
                />
              </Box>
            </Flex>
            <ImageSubtitle
              bg="primary"
              color="white"
              y="bottom"
              x="right"
              round
            >
              {type}
            </ImageSubtitle>
            <Hide query={this.MEDIA_QUERY_SMALL}>
              <ImageSubtitle bg="backgroundDark">{publishedDate}</ImageSubtitle>
            </Hide>
          </this.ProjectTag>
        </this.ImageContainer>
      </Flex>
    </Card>
  );

  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    repositoryUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    logo: PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
      }),
      title: PropTypes.string,
    }).isRequired,
  };

  Projects = () => (
    <Section.Container id="projects" Background={this.Background}>
      <Section.Header name="Projects" icon="💻" label="notebook" />
      <StaticQuery
        query={graphql`
          query ProjectsQuery {
            contentfulAbout {
              projects {
                id
                name
                description
                projectUrl
                repositoryUrl
                publishedDate(formatString: "YYYY")
                type
                logo {
                  title
                  image: resize(width: 200, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        `}
        render={({ contentfulAbout }) => (
          <CardContainer minWidth="350px">
            {contentfulAbout.projects.map((p, i) => (
              <Fade bottom delay={i * 200} key={p.id}>
                <this.Project {...p} />
              </Fade>
            ))}
          </CardContainer>
        )}
      />
    </Section.Container>
  );

  render() {
    return <this.Projects />;
  }
}

export default Projects;
