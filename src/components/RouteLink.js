import React from 'react';
import { Box } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';
import Toggle from './Toggler';

const RouteLink = ({ onClick, selected, name }) => (
  <Box ml={[2, 3]} fontSize={[2, 3]}>
    <LinkAnimated
      onClick={onClick}
      selected={selected}
      tabIndex={0}
      name={name}
    >
      {name}
    </LinkAnimated>
  </Box>
);

// eslint-disable-next-line react/prop-types
export const DarkToggler = ({ theme, toggle }) => (
  <Box ml={[2, 3]} color="primaryText" fontSize={[2, 3]}>
    <LinkAnimated>
      <Toggle theme={theme} toggleTheme={toggle} />
    </LinkAnimated>
  </Box>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
};

export default RouteLink;
