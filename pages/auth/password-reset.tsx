import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const PasswordResetController = asyncComponent(
  () =>
    import(
      "@/controllers/AuthController/PasswordResetController/PasswordReset.Container"
    ),
);

const PasswordResetPage = (): JSX.Element => {
  return (
    <>
      <PasswordResetController />
    </>
  );
};

export default PasswordResetPage;
