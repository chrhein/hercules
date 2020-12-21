import preset from '@rebass/preset';

export const lightTheme = {
  ...preset,
  colors: {
    background: '#FFFFFF',
    backgroundDark: '#e7eaef',

    text: '#080b11',
    heading: '#07090f',

    primary: '#162229',
    primaryLight: '#737a7e',
    primaryDark: '#0d1418',

    secondary: '#05828e',
    secondaryLight: '#69b4bb',
    secondaryDark: '#034e55',

    projectCard: '#f0f7f8',
    projectIcon: '#727679',

    airplane: '#69b4bb',
    airplaneBottom: '#034e55',
    clouds: '#f2f2f2',
  },
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
}
export const darkTheme = {
  ...preset,
  colors: {
    background: '#000103',
    backgroundDark: '#070a0d',

    text: '#f9fafb',
    heading: '#f3f5f7',

    primary: '#e2e6eb',
    primaryLight: '#c6cdd7',
    primaryDark: '#0b1014',

    secondary: '#121b22',
    secondaryLight: '#101316',
    secondaryDark: '#a4b6c3',

    projectCard: '#14181c',
    projectIcon: '#f9fafb',

    airplane: '#293138',
    airplaneBottom: '#10181e',
    clouds: '#ffffff',
  },

  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
}
