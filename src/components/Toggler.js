import React from 'react';
import { func, string } from 'prop-types';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';

const StyledToggle = styled.span`
  fill: ${({ theme }) => theme.colors.primaryText};
  stroke: ${({ theme }) => theme.colors.primaryText};

  &:hover {
    fill: ${({ theme }) => theme.colors.secondary};
    stroke: ${({ theme }) => theme.colors.secondary};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <StyledToggle>
      <DarkModeSwitch
        style={{
          marginBottom: '-5px',
          marginTop: '-4px',
          marginLeft: '3px',
          marginRight: '3px',
        }}
        checked={theme === 'light'}
        onChange={toggleTheme}
        sunColor="currentColor"
        moonColor="currentColor"
      />
    </StyledToggle>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
