import preset from '@rebass/preset';

export const lightTheme = {
  ...preset,
  colors: {
    background: '#d49a89',
    primary: '#f7d1ba',
    secondary: '#547571',
    secondaryLight: '#76908d',
    menu: '#eeefee',

    cloud: '#f4f4f4',

    primaryText: '#080b11',
    secondaryText: '#737a7e',
    header: '#f4f4f4',
    footer: '#393e46',

    boxShadow: '0 10px 20px 0 rgba(0,0,0,0.30)',
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
    background: '#222831',
    primary: '#393e46',
    secondary: '#42505f',
    secondaryLight: '#6f8193',
    menu: '#1a1a1a',

    cloud: '#f4f4f4',

    primaryText: '#f9fafb',
    secondaryText: '#8899ac',
    header: '#e2e6eb',
    footer: '#1c1c1e',

    boxShadow: '0 10px 20px 0 rgba(0,0,0,0.40)',
  },

  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};
