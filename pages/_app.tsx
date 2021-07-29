//import '../styles/globals.css’;
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import React from 'react';
import { GlobalStyles } from 'styles/global';

// 페이지가 로딩될 때 가장 먼저 실행됨.
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // ThemeProvider에서 글로벌하게 CSS 색상을 변수로 관리한다.
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
