const colors = require('./colors');
const about = require('./about.json');

require('dotenv').config();

const {
  ACCESS_TOKEN,
  SPACE_ID,
  ANALYTICS_ID,
  DETERMINISTIC,
  FULL_NAME,
  FIRST_NAME,
} = process.env;

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: FULL_NAME,
      short_name: FULL_NAME,
      start_url: '/',
      background_color: colors.background,
      theme_color: colors.primary,
      display: 'minimal-ui',
      icon: 'src/assets/images/ch.png',
    },
  },
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
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
    },
  },
  `gatsby-transformer-remark`,
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
    isMediumUserDefined: !!about.mediumUser,
    deterministicBehaviour: !!DETERMINISTIC,
  },
};
