/* eslint-disable react/prop-types */
import React from 'react';
import { useScrollSection } from 'react-scroll-section';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondaryText};
    transition: all 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryText};

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

const Root = styled.div`
  font-size: large;
  padding-bottom: 1em;
  line-height: 2em;

  @media (max-width: 600px) {
    line-height: 1.5em;
    font-size: medium;
  }
`;

const MarkdownParagraph = styled.p`
  line-height: 2em;
  &:first-child {
    margin-top: 0;
  }
`;

const MarkdownList = styled.ul`
  margin: 0;
`;

const MarkdownListItem = styled.li`
  margin: 1em 0;
  line-height: 2em;
  @media (max-width: 400px) {
    margin: 0;
  }
`;

const MarkdownLink = ({ href, children }) => {
  const isInnerLink = href.startsWith('#');
  if (isInnerLink)
    return (
      <InnerLink href={href.substring(1, href.length)}>{children}</InnerLink>
    );

  return (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  );
};

const InnerLink = ({ href, children }) => {
  const { onClick } = useScrollSection(href);

  return <StyledLink onClick={onClick}>{children}</StyledLink>;
};

export default {
  root: Root,
  paragraph: MarkdownParagraph,
  list: MarkdownList,
  listItem: MarkdownListItem,
  link: MarkdownLink,
};
