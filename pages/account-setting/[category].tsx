// 사이드 메뉴가 존재하게?? 살짝 깃허브 느낌으로 갑시다.
import asyncComponent from "@/components/_Common/asyncComponent";
import React from "react";

const AccountSettingController = asyncComponent(
  () =>
    import("@/controllers/AccountSettingController/AccountSetting.Container"),
);
const AccountSettingPage = (): JSX.Element => {
  return (
    <>
      <AccountSettingController />
    </>
  );
};

export default AccountSettingPage;
