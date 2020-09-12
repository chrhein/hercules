import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import markdownRenderer from '../components/MarkdownRenderer';

const VolunteerEx = () => (
  <StaticQuery
    query={graphql`
      query volexQuery {
        markdownRemark(frontmatter: { mdName: { eq: "volexmd" } }) {
          rawMarkdownBody
        }
      }
    `}
    render={(volexQuery) => {
      return (
        <ReactMarkdown
          source={volexQuery.markdownRemark.rawMarkdownBody}
          renderers={markdownRenderer}
        />
      );
    }}
  />
);

export default VolunteerEx;
