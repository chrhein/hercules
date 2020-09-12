import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
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
        <ReactMarkdown
          source={exQuery.markdownRemark.rawMarkdownBody}
          renderers={markdownRenderer}
        />
      );
    }}
  />
);

export default Experience;
