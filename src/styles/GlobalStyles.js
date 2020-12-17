import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    overflow-x: hidden;
    width: 100vw;
    background-color: var(--bg);
    color: var(--textNormal);

    &.dark {
      --bg: #080b11;
      --textNormal: #ffffff;
      --textInverse: #080b11;
      --textTitle: #69b4bb;
      --textTitleInverse: #e7eaef;
      --link: #e7eaef;
      --headerColor: #162229;
    }

    &.light {
      --bg: #ffffff;
      --textNormal: #080b11;
      --textInverse: #ffffff;
      --textTitle: #034e55;
      --textTitleInverse: #0d1418;
      --link: #05828e;
      --headerColor: #e7eaef;
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(--textTitle);
    }

    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    a {
      color: var(--link);
    }

    img {
      padding: 0;
      margin: 0;
      user-select: none;
    }
  }`;