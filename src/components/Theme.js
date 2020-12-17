import preset from '@rebass/preset';

export const lightTheme = {
  ...preset,
  background: '#FFFFFF',
  backgroundDark: '#e7eaef',

  text: '#080b11',

  primary: '#162229',
  primaryLight: '#737a7e',
  primaryDark: '#0d1418',

  secondary: '#05828e',
  secondaryLight: '#69b4bb',
  secondaryDark: '#034e55',
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
}
export const darkTheme = {
  ...preset,
  background: '#000000',
  backgroundDark: '#181510',

  text: '#f7f4ee',

  primary: '#e9ddd6',
  primaryLight: '#8c8581',
  primaryDark: '#0d1418',

  secondary: '#05828e',
  secondaryLight: '#69b4bb',
  secondaryDark: '#034e55',
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
}
