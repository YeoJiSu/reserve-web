import React from "react";

const AccountSettingPresenter = (): JSX.Element => {
  return (
    <>
      <div>
        <p>case 문으로 보여주는 UI를 다양하게 변경할 거임.</p>
        <p>카테고리가 아래처럼 있다는 가정하에 </p>
        <p>1. personal-info, </p>
        <p>2. login-and-security,</p>
        <p>3. notifications,</p>
        <p>4. privacy-and-sharing</p>
        <p>각자에 맞는 컴포넌트를 보여줌. </p>
      </div>
    </>
  );
};

export default AccountSettingPresenter;
