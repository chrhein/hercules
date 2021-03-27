import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { Card, CardContainer } from '../components/Card';
import SocialLink from '../components/SocialLink';
import ImageSubtitle from '../components/ImageSubtitle';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const CARD_HEIGHT = '220px';

const Title = styled(Text)`
  padding-top: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${({ theme }) => theme.secondary};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectLinks = styled.div`
  position: absolute;
  bottom: 2px;
  left: 4px;
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;
  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

// eslint-disable-next-line no-unused-vars
const ProjectSVG = styled.div`
  width: calc(${CARD_HEIGHT} / 1.5);
  height: ${CARD_HEIGHT};
  margin: auto;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(-${CARD_HEIGHT} - 3.5px);
  padding-bottom: -20px;

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Project = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  logo,
}) => {
  return (
    <Card p={0}>
      <span className="trafficMenuBar">
        <span className="trafficLight trafficRed" />
        <span className="trafficLight trafficYellow" />
        <span className="trafficLight trafficGreen" />
      </span>
      <Flex style={{ height: CARD_HEIGHT }}>
        <TextContainer>
          <span>
            <Title my={2} pb={1} color="text">
              {name}
            </Title>
          </span>
          <Text width={[1]} style={{ overflow: 'auto' }} color="primary">
            {description}
          </Text>
          <ProjectLinks>
            <Flex
              style={{
                float: 'left',
              }}
            >
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="Github repository"
                  fontAwesomeIcon="github"
                  url={repositoryUrl}
                />
              </Box>
              <Box mx={1} fontSize={5}>
                <SocialLink
                  className="projectCardLink"
                  name="Live demo"
                  fontAwesomeIcon="globe"
                  url={projectUrl}
                />
              </Box>
            </Flex>
          </ProjectLinks>
        </TextContainer>

        <ImageContainer>
          <ProjectImage src={logo.image.src} alt={logo.title} />
          <ProjectTag>
            <ImageSubtitle color="button" y="bottom" x="right" round>
              {type}
            </ImageSubtitle>
          </ProjectTag>
        </ImageContainer>
      </Flex>
    </Card>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  type: PropTypes.string,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Projects = () => (
  <Section.Container id="projects">
    <Section.Header name="Projects" label="projects" />
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          landingInfoJson {
            projects {
              id
              name
              description
              projectUrl
              repositoryUrl
              logo {
                title
                image {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ landingInfoJson }) => (
        <CardContainer
          minWidth="350px"
          maxWidth="500px"
          className="cardContainer"
        >
          {landingInfoJson.projects.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Project {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Projects;
