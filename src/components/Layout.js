import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import config from 'react-reveal/globals';
import preset from '@rebass/preset';
import colors from '../../colors';
import Helmet from './Helmet';
import { GlobalStyles } from "./Globalstyles";
import { lightTheme, darkTheme } from "./Theme";
import  {useDarkMode} from "./useDarkMode";
import Toggle from './Toggler';

/*
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    overflow-x: hidden;
    width: 100vw;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;
*/

config({ ssrFadeout: true });

const loadScript = (src) => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
};

/*
const theme = {
  ...preset,
  colors,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};
*/

const Layout = ({ children }) => {
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <main>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ScrollingProvider>
          <Helmet />
          {children}
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ScrollingProvider>
      </ThemeProvider>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
