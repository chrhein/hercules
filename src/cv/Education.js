import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
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
        <ReactMarkdown
          source={eduQuery.markdownRemark.rawMarkdownBody}
          renderers={markdownRenderer}
        />
      );
    }}
  />
);

export default Education;
