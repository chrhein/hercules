import preset from '@rebass/preset';

export const lightTheme = {
  ...preset,
  colors: {
    backgroundGradient:
      'linear-gradient(180deg, rgb(247, 182, 187), rgb(23, 123, 134))',
    background: '#d49a89',
    backgroundDark: '#e7eaef',

    text: '#080b11',
    heading: '#f4f4f4',
    headerText: '#f4f4f4',

    primary: '#162229',
    primaryLight: '#737a7e',
    primaryDark: '#0d1418',

    secondary: '#05828e',
    secondaryLight: '#69b4bb',
    secondaryDark: '#034e55',

    projectCard: '#f7d1ba',
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

    boxShadow: '0 10px 20px 0 rgba(0,0,0,0.30)',
    menuBar: '#eeefee',
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
    backgroundGradient:
      'linear-gradient(180deg, rgb(247, 182, 187), rgb(23, 123, 134))',
    background: '#000000',
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

    projectCard: '#24252d',
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

    boxShadow: '0 10px 20px 0 rgba(0,0,0,0.40)',

    menuBar: '#1a1a1a',
  },

  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};
