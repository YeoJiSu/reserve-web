import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const MainContainer = asyncComponent(
  () => import("@/controllers/MainController/Main.Container"),
);

const IndexPage = (): JSX.Element => {
  return (
    <>
      <MainContainer />
    </>
  );
};

export default IndexPage;
