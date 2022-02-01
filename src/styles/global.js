import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Russo One', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;