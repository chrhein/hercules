import preset from '@rebass/preset';

export const lightTheme = {
  ...preset,
  colors: {
    background: '#FFFFFF',
    backgroundDark: '#e7eaef',

    text: '#080b11',

    primary: '#162229',
    primaryLight: '#737a7e',
    primaryDark: '#0d1418',

    secondary: '#05828e',
    secondaryLight: '#69b4bb',
    secondaryDark: '#034e55',
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

    text: '#c6cdd7',

    primary: '#e2e6eb',
    primaryLight: '#c6cdd7',
    primaryDark: '#0b1014',

    secondary: '#121b22',
    secondaryLight: '#121b22',
    secondaryDark: '#a4b6c3',


  },

  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
}
