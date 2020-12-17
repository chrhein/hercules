import React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';
import Toggle from './Toggler';

const RouteLink = ({ onClick, selected, name }) => (
  <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
    <LinkAnimated onClick={onClick} selected={selected} tabIndex={0}>
      {name}
    </LinkAnimated>
  </Box>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
};

export default RouteLink;
