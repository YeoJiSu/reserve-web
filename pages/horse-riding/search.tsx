// 승마장 검색 페이지
import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const SearchContainer = asyncComponent(
  () =>
    import(
      "@/controllers/HorseRidingController/SearchController/Search.Container"
    ),
);

const HorseRidingSearchPage = (): JSX.Element => {
  return (
    <>
      <SearchContainer />
    </>
  );
};

export default HorseRidingSearchPage;
