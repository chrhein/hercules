import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import markdownRenderer from '../components/MarkdownRenderer';

const Education = () => (
  <StaticQuery
    query={graphql`
      query eduQuery {
        markdownRemark(frontmatter: { mdName: { eq: "educationmd" } }) {
          rawMarkdownBody
        }
      }
    `}
    render={(eduQuery) => {
      return (
        <Fade bottom>
          <ReactMarkdown
            source={eduQuery.markdownRemark.rawMarkdownBody}
            renderers={markdownRenderer}
          />
        </Fade>
      );
    }}
  />
);

export default Education;
