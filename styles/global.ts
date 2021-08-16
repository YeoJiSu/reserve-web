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
  
.loader {
  position: relative;
  margin: 0 auto;
  width: 360px;
  height: 100vh;

  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;

  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
}
`;
