import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const AboutContainer = asyncComponent(
  () => import("@/controllers/HelpController/AboutController/About.Container"),
);

const AboutsPage = (): JSX.Element => {
  return (
    <>
      <AboutContainer />
    </>
  );
};

export default AboutsPage;
