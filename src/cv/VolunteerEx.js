import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
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
        <Fade bottom>
          <ReactMarkdown
            source={volexQuery.markdownRemark.rawMarkdownBody}
            renderers={markdownRenderer}
          />
        </Fade>
      );
    }}
  />
);

export default VolunteerEx;
