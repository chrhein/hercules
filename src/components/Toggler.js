import React from 'react'
import { func, string } from 'prop-types';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Toggle = ({theme,  toggleTheme}) => {
    return (
      <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={theme === "light"}
        onChange={toggleTheme}
        moonColor={'black'}
        sunColor={'white'}
      />
      );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;