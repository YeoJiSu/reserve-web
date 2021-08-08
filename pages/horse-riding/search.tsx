// 승마장 검색 페이지
import InputContainer from "@/components/_Common/Form/Input/Input.Container";
import Layout from "components/Layout";
import React from "react";
import EmailIcon from "@/assets/email.svg";
const HorseRidingSearchPage = (): JSX.Element => {
  return <InputContainer icon={<EmailIcon />} placeholder="이름" />;
};

export default HorseRidingSearchPage;
