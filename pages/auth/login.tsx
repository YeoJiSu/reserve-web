import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const LoginForm = asyncComponent(
  () => import("@/controllers/AuthController/LoginController/Login.Container"),
);

const LoginPage = (): JSX.Element => (
  <>
    <LoginForm />
  </>
);

export default LoginPage;
