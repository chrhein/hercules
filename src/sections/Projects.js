import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import { Project } from '../project/projectStyling';

class Projects extends Component {
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
        height={['80vh', '80vh']}
        width={['100vw', '100vw']}
        invertX
      />

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

      <Triangle
        id="secondaryLightOnTabletAndMobile"
        color="backgroundDark"
        height={['25vh', '20vh']}
        width={['100vw', '100vw']}
        invertY
      />
    </div>
  );

  render() {
    if (!this.state.windowWidth) {
      return <div>Loading</div>;
    }
    return (
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
                  <Project {...p} />
                </Fade>
              ))}
            </CardContainer>
          )}
        />
      </Section.Container>
    );
  }
}

export default Projects;
