import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { withTheme } from 'styled-components';

// eslint-disable-next-line react/prop-types
const Helmet = ({ theme = {} }) => {
  const title = `Christian Hein`;
  const favicon = `https://github.com/chrhein/hercules/blob/master/src/assets/images/favicon_hercules.png?raw=true`;
  const description = `Visualization Student at the University of Bergen`;
  return (
    <ReactHelmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={favicon} />
      <meta name="theme-color" content={theme.background} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={favicon} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={favicon} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
    </ReactHelmet>
  );
};

export default withTheme(Helmet);
