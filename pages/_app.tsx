//import '../styles/globals.css’;
import type { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import React from "react";
import { GlobalStyles } from "styles/global";
import { cookieStringToObject } from "@/utils/tokens";
import { wrapper } from "../store";

const DEFAULT_SEO = {
  title: "러브 홀스 - 종합 승마장 예약 시스템",
  description: "러브 홀스 - 종합 승마장 예약 시스템",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.garymeehan.ie",
    title: "러브 홀스",
    description: "러브 홀스 - 종합 승마장 예약 시스템",
    image:
      "https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg",
    site_name: "러브 홀스",
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
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default wrapper.withRedux(MyApp);

MyApp.getInitialProps = async (context: AppContext) => {
  const appInitialProps = await MyApp.getInitialProps(context);
  const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
  console.log("ㅗㄷㅁㅇㄷㄱ", cookieObject);
  return { ...appInitialProps };
};
