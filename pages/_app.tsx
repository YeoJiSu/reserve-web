import Layout from "@/components/Layout";
import { userAcions } from "@/store/user";
import axios from "@/utils/axios";
import { cookieStringToObject, cookieType } from "@/utils/tokens";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global";
import { theme } from "styles/theme";

import { wrapper } from "../store";

import type { AppContext, AppInitialProps, AppProps } from "next/app";
// const DEFAULT_SEO = {
//   title: "러브 홀스 - 종합 승마장 예약 시스템",
//   description: "러브 홀스 - 종합 승마장 예약 시스템",
//   openGraph: {
//     type: "website",
//     locale: "ko_KR",
//     url: "https://www.garymeehan.ie",
//     title: "러브 홀스",
//     description: "러브 홀스 - 종합 승마장 예약 시스템",
//     image:
//       "https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg",
//     site_name: "러브 홀스",
//     imageWidth: 1200,
//     imageHeight: 1200,
//   },
//   twitter: {
//     handle: "@garmeeh",
//     cardType: "summary_large_image",
//   },
// };

// 페이지가 로딩될 때 가장 먼저 실행됨.
const MyApp = ({ Component, pageProps }: AppProps | any): JSX.Element => {
  // ThemeProvider에서 글로벌하게 CSS 색상을 변수로 관리한다.
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

MyApp.getInitialProps = async (context: AppContext) => {
  const { ctx }: { ctx: NextPageContext | any } = context;
  const appInitialProps: AppInitialProps = await App.getInitialProps(context);
  const cookieObject: cookieType = cookieStringToObject(
    ctx.req?.headers.cookie,
  );

  console.log(ctx);
  if (cookieObject.accessToken) {
    try {
      const result: AxiosResponse<any> = await axios.get(
        "https://strapi.kspark.link/users/me",
        {
          headers: {
            Authorization: `Bearer ${cookieObject.accessToken}`,
          },
        },
      );
      axios.defaults.headers.Cookie = cookieObject.accessToken;

      const { data } = await result;
      const newData = { user: data, jwt: cookieObject.accessToken };
      console.log(newData);
      // ctx.store.dispatch(userAcions.setLoggedUser(newData));

      // ctx.store.dispatch({ type: LOAD_USER_REQUEST });
    } catch (error) {
      console.log(error, "로그인 만료");
    }
  }
  console.log("123");
  return { ...appInitialProps };
};

export default wrapper.withRedux(MyApp);
