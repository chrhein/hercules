import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { Card, CardContainer } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import { LayoutIcon } from '../assets/svgs/Icons';
import { darkTheme, lightTheme } from '../styles/Theme';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['0vh', '10vh']}
      width={['0vw', '100vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['0vh', '14vh']}
      width={['0vw', '100vw']}
    />


    <Triangle
      color="primaryDark"
      height={['10vh', '20vh']}
      width={['40vw', '40vw']}
    />

    <Triangle
      color="secondaryLight"
      height={['15vh', '23vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['6vh', '6vh']}
      width={['40vw', '40vw']}
      invertX
    />



    <Triangle
      color="primaryDark"
      height={['25vh', '20vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);


const CARD_HEIGHT = '200px';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${({ theme }) => theme.secondary}
}

;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
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

const ProjectSVG = styled.div`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(-${CARD_HEIGHT} - 3.5px);

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Project = ({
                   theme,
                   name,
                   description,
                   projectUrl,
                   repositoryUrl,
                   type,
                   logo,
                 }) => {
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <Card p={0}>
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
        </TextContainer>

        <ImageContainer>
          <ProjectSVG>
            <LayoutIcon
              color={themeMode.colors.projectIcon}
            />
          </ProjectSVG>
          <ProjectTag>
            <Flex
              style={{
                float: 'right',
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
                  name="Live demo"
                  fontAwesomeIcon="globe"
                  url={projectUrl}
                />
              </Box>
            </Flex>
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
  theme: PropTypes.string,
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

const Projects = ({ theme }) => (
  <Section.Container id="projects" Background={Background}>
    <Section.Header name="Projects" label="notebook" />
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
            <Fade delay={i * 200} key={p.id}>
              <Project theme={theme} {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Projects;
