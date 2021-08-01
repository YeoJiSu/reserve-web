import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: any }>`

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.defaultWhite};
    margin: 0px;
    padding: 0px;
    font-family: 'Lato', sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  a{all: unset;}
  a:link { all: unset;}
  a:visited { all: unset;}
  a:hover { all: unset;}
`;
