import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Box } from 'rebass/styled-components';

const DarkModeButton = () => {
  let websiteTheme
  if (typeof window !== 'undefined') {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)


  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const themeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
      <DarkModeSwitch
        onChange={themeToggle}
        checked={theme === 'dark'}
        size={25}
      />
    </Box>

  )
}

export default DarkModeButton
