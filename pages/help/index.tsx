import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const HelpContainer = asyncComponent(
  () => import("@/controllers/HelpController/Help.Container"),
);

const HelpPage = (): JSX.Element => {
  return (
    <>
      <HelpContainer />
    </>
  );
};

export default HelpPage;
