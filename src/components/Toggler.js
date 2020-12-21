import React from 'react'
import { func, string } from 'prop-types';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Toggle = ({theme,  toggleTheme}) => {
    return (
      <DarkModeSwitch
        style={
          {
            marginBottom: '-5px',
            marginTop: '-4px',
            marginLeft: '3px',
            marginRight: '3px'
          }
        }
        checked={theme === "light"}
        onChange={toggleTheme}
        sunColor={'#e2e6eb'}
        moonColor={'#e2e6eb'}
      />
      );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;