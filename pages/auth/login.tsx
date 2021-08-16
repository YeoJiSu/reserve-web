import Layout from "components/Layout";
import React from "react";
import asyncComponent from "@/components/_Common/asyncComponent";

const LoginForm = asyncComponent(
  () => import("@/components/Auth/LoginComponent/Login.Container"),
);

const LoginPage = (): JSX.Element => (
  <Layout>
    <LoginForm />
  </Layout>
);

export default LoginPage;
