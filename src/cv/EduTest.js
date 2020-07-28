import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import Hide from '../components/Hide';

const EduTest = () => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: { mdName: { eq: "educationmd" } }) {
          html
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

export default EduTest;
