// 승마장 검색 페이지
import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const HorseRidingContainer = asyncComponent(
  () => import("@/controllers/HorseRidingController/HorseRiding.Container"),
);

const HorseRidingPage = (): JSX.Element => {
  return (
    <>
      <HorseRidingContainer />
    </>
  );
};

export default HorseRidingPage;
