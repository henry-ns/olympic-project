import { createGlobalStyle } from 'styled-components';

import {
  backgroundColor,
  primaryTextColor,
  primaryLightColor,
  secundaryTextColor,
} from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

    &:hover {
      outline: 0;
    }

    &::selection{
      background-color: ${primaryLightColor};
      color: ${secundaryTextColor};
    }
  }

  html, body, #root {
    width: 100%;
    height: 100%;

    font: 16px Raleway, sans-serif;
    color: ${primaryTextColor};
  }

  body {
    background: ${backgroundColor};
  }

  #root {
    display: grid;
    grid-template-rows: 80px 1fr auto;
    grid-template-columns: 1fr;
  }

  button {
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  a {
    text-decoration: none;
    color: ${primaryTextColor};
  }

  ul {
    list-style: none;
  }
`;
