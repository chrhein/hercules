import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import config from 'react-reveal/globals';
import Helmet from './Helmet';
import { GlobalStyles } from '../styles/GlobalStyles';
import { darkTheme, lightTheme } from '../styles/Theme';

config({ ssrFadeout: true });

const loadScript = (src) => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
};
// eslint-disable-next-line react/prop-types
const Layout = ({ theme, mountedComponent, children }) => {
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <main>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ScrollingProvider>{children}</ScrollingProvider>
      </ThemeProvider>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
