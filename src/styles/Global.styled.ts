import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font}
  }
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font};
  }

  section {
    padding: 100px 0;
  }
  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }
  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

  h3 {
    font-family: Josefine Sans, sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
  }
`;
