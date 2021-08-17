import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const TermsOfServiceContainer = asyncComponent(
  () =>
    import(
      "@/controllers/HelpController/TermsOfServiceController/TermsOfService.Container"
    ),
);

const TermsOfServicePage = (): JSX.Element => {
  return (
    <>
      <TermsOfServiceContainer />
    </>
  );
};

export default TermsOfServicePage;
