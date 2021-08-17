import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const PrivacyPolicyContainer = asyncComponent(
  () =>
    import(
      "@/controllers/HelpController/PrivacyPolicyController/PrivacyPolicy.Container"
    ),
);

const privacyPolicyPage = (): JSX.Element => {
  return (
    <>
      <PrivacyPolicyContainer />
    </>
  );
};

export default privacyPolicyPage;
