import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const LoginForm = asyncComponent(
  () => import("@/components/Auth/LoginComponent/Login.Container"),
);

const LoginPage = (): JSX.Element => (
  <>
    <LoginForm />
  </>
);

export default LoginPage;
