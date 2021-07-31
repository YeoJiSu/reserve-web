import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import React from "react";
import { GlobalStyles } from "styles/global";
import { NextSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "Next.js SEO Plugin",
  description: "SEO made easy for Next.js projects",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.garymeehan.ie",
    title: "Next.js Seo",
    description: "SEO made easy for Next.js projects",
    image:
      "https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg",
    site_name: "GaryMeehan.ie",
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: "@garmeeh",
    cardType: "summary_large_image",
  },
};

// 페이지가 로딩될 때 가장 먼저 실행됨.
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // ThemeProvider에서 글로벌하게 CSS 색상을 변수로 관리한다.
  return (
    <ThemeProvider theme={theme}>
      <NextSeo {...DEFAULT_SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
