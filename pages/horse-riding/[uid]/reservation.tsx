// 선택한 1개의 승마장을 자세히 보여주는 페이지
import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const ReservationContainer = asyncComponent(
  () =>
    import(
      "@/controllers/HorseRidingController/ReservationController/Reservation.Container"
    ),
);

const reservationPage = (): JSX.Element => {
  return (
    <>
      <ReservationContainer />
    </>
  );
};

export default reservationPage;
