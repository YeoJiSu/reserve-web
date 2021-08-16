// 사이드 메뉴가 존재하게?? 살짝 깃허브 느낌으로 갑시다.
import Layout from "components/Layout";
import React from "react";

const AccountSettingPage = (): JSX.Element => {
  return (
    <>
      <main>
        <p>case 문으로 보여주는 UI를 다양하게 변경할 거임.</p>
        <p>카테고리가 아래처럼 있다는 가정하에 </p>
        <p>1. personal-info, </p>
        <p>2. login-and-security,</p>
        <p>3. notifications,</p>
        <p>4. privacy-and-sharing</p>
        <p>각자에 맞는 컴포넌트를 보여줌. </p>
      </main>
    </>
  );
};

export default AccountSettingPage;
