// const colors = require('./colors');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Christian Hein',
      short_name: 'Christian Hein',
      start_url: '/',
      background_color: '#d49a89',
      theme_color: '#d49a89',
      display: 'minimal-ui',
      icon: 'src/assets/images/favicon_hercules.png',
    },
  },
  `gatsby-transformer-remark`,
  'gatsby-plugin-styled-components',
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
        include: `${__dirname}/src/assets/svgs/`,
      },
    },
  },
  'gatsby-plugin-cname',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-173250067-1',
    },
  },
];

module.exports = {
  plugins,
  siteMetadata: {
    siteUrl: 'http://christianhein.no/',
  },
};
