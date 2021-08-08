import Layout from "components/Layout";
import React from "react";
import asyncComponent from "@/components/_Common/asyncComponent";
import axios from "axios";
import wrapper from "@/store/configureStore";
import { loadUser } from "@/action/user";

const LoginForm = asyncComponent(
  () => import("@/components/Auth/LoginComponent/Login.Container"),
);

const LoginPage = (): JSX.Element => (
  <Layout>
    <LoginForm />
  </Layout>
);

export default LoginPage;
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // back 서버로 쿠키 전달
    // 로그인을 하게되면 context에서 req를 사용 가능
    // 프론트서버에서 쿠키가 공유되는걸 방지하기 위해 if문으로 조건 작업 진행
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    // console.log(
    //   "프론트서버에서 쿠키가 공유되는걸 방지하기 위해 if문으로 조건 작업 진행",
    //   axios.defaults.headers.Cookie,
    // );
    await context.store.dispatch(loadUser());
  },
);
