// 선택한 1개의 승마장을 자세히 보여주는 페이지
import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const ReservationListContainer = asyncComponent(
  () =>
    import(
      "@/controllers/HorseRidingController/ReservationListController/ReservationList.Container"
    ),
);

const ReservationListPage = (): JSX.Element => {
  return (
    <>
      <ReservationListContainer />
    </>
  );
};

export default ReservationListPage;
