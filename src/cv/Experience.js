import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import markdownRenderer from '../components/MarkdownRenderer';

const Experience = () => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: { mdName: { eq: "experiencemd" } }) {
          rawMarkdownBody
        }
      }
    `}
    render={(data) => {
      return (
        <Fade bottom>
          <ReactMarkdown
            source={data.markdownRemark.rawMarkdownBody}
            renderers={markdownRenderer}
          />
        </Fade>
      );
    }}
  />
);

export default Experience;
