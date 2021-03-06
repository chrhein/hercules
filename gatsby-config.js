// const colors = require('./colors');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Christian Hein',
      short_name: 'Christian Hein',
      start_url: '/',
      background_color: 'black',
      theme_color: 'black',
      display: 'minimal-ui',
      icon: 'src/assets/images/favicon_hercules.png',
    },
  },
  `gatsby-transformer-remark`,
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  'gatsby-plugin-offline',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data`,
    },
  },
  'gatsby-transformer-json',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: `${__dirname}/src/assets/svgs/`, // See below to configure properly
      },
    },
  },
  'gatsby-plugin-cname',
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    deterministicBehaviour: !!DETERMINISTIC,
    siteUrl: 'http://christianhein.no/',
  },
};
