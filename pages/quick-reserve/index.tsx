// 승마장 검색 페이지
import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const QuickReserveContainer = asyncComponent(
  () => import("@/controllers/QuickReserveController/QuickReserve.Container"),
);

const QuickReservePage = (): JSX.Element => {
  return (
    <>
      <QuickReserveContainer />
    </>
  );
};

export default QuickReservePage;
