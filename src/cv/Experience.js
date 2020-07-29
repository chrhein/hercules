import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import markdownRenderer from '../components/MarkdownRenderer';

const Experience = () => (
  <StaticQuery
    query={graphql`
      query exQuery {
        markdownRemark(frontmatter: { mdName: { eq: "experiencemd" } }) {
          rawMarkdownBody
        }
      }
    `}
    render={(exQuery) => {
      return (
        <Fade bottom>
          <ReactMarkdown
            source={exQuery.markdownRemark.rawMarkdownBody}
            renderers={markdownRenderer}
          />
        </Fade>
      );
    }}
  />
);

export default Experience;
