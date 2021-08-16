// 승마장 검색 페이지
import EmailIcon from "@/assets/email.svg";
import InputContainer from "@/components/_Common/Form/Input/Input.Container";
import React from "react";

const HorseRidingSearchPage = (): JSX.Element => {
  return (
    <>
      <InputContainer icon={<EmailIcon />} placeholder="이름" />
    </>
  );
};

export default HorseRidingSearchPage;
