import preset from '@rebass/preset';

export const Theme = {
  ...preset,
  colors: {
    background: "var(--bg)",
    backgroundDark: "var(--bgDark)",

    text: "var(--textNormal)",

    primary: "var(--primary)",
    primaryLight: "var(--primaryLight)",
    primaryDark: "var(--primaryDark)",

    secondary: "var(--secondary)",
    secondaryLight: "var(--secondaryLight)",
    secondaryDark: "var(--secondaryDark)",
  },
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },

}
