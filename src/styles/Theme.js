import preset from '@rebass/preset';

export const lightTheme = {
  ...preset,
  colors: {
    background: '#FFFFFF',
    backgroundDark: '#e7eaef',

    text: '#080b11',
    heading: '#07090f',
    headerText: '#e2e6eb',

    primary: '#162229',
    primaryLight: '#737a7e',
    primaryDark: '#0d1418',

    secondary: '#05828e',
    secondaryLight: '#69b4bb',
    secondaryDark: '#034e55',

    projectCard: '#f0f7f8',
    projectIcon: '#727679',
    projectCardHoverShadow: '#69b4bb',

    button: '#737a7e',
    buttonHover: '#05828e',

    airplane: '#69b4bb',
    airplaneBottom: '#034e55',
    clouds: '#f2f2f2',

    resumeTitle: '#737a7e',
    resumeHeader: '#07090f',
    resumeInfo: '#05828e',
    resumeParagraph: '#737a7e',
    resumeDivider: '#727679',
    resumePhotoBorder: '#727679',
  },
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};
export const darkTheme = {
  ...preset,
  colors: {
    background: '#000103',
    backgroundDark: '#101111',

    text: '#f9fafb',
    heading: '#f3f5f7',
    headerText: '#e2e6eb',

    primary: '#e2e6eb',
    primaryLight: '#c6cdd7',
    primaryDark: '#0b1014',

    secondary: '#121b22',
    secondaryLight: '#101316',
    secondaryDark: '#a4b6c3',

    projectCard: '#14181c',
    projectIcon: '#f9fafb',
    projectCardHoverShadow: '#034e55',

    button: '#c7c8c8',
    buttonHover: '#6f8193',

    airplane: '#6f8193',
    airplaneBottom: '#42505f',
    clouds: '#ffffff',

    resumeTitle: '#42505f',
    resumeHeader: '#f3f5f7',
    resumeInfo: '#8899ac',
    resumeParagraph: '#c4c9cf',
    resumeDivider: '#293138',
    resumePhotoBorder: '#7c7d7d',
  },

  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};
