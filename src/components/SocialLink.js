import React from 'react';
import { Link } from 'rebass/styled-components';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from 'react-fontawesome';
import 'tippy.js/dist/tippy.css'; // eslint-disable-line

const IconLink = styled(Link)`
  text-decoration: none;
  padding-bottom: 2px;
  transition: 0.2s;
  outline: none;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -2px;
    background: ${(props) => props.theme.colors.secondaryLight};
    height: 3px;
    border-radius: 5px;
    transition-property: width;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }

  &:focus:after,
  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }

  .projectCardLink {
    margin-top: 5px;
    padding-top: 10px;
    padding-bottom: 1px;
  }

  &:hover {
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url, color }) => (
  <Tippy content={name} placement="bottom" trigger="mouseenter" arrow={false}>
    <IconLink
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      color={color}
    >
      <FontAwesomeIcon name={fontAwesomeIcon} />
    </IconLink>
  </Tippy>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SocialLink;
