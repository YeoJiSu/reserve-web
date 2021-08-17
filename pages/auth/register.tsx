import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const RegisterController = asyncComponent(
  () =>
    import(
      "@/controllers/AuthController/RegisterController/Register.Container"
    ),
);

const TermsOfServicePage = (): JSX.Element => {
  return (
    <>
      <RegisterController />
    </>
  );
};

export default TermsOfServicePage;
