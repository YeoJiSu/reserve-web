import Layout from "components/Layout";
import React from "react";

const PasswordResetPage = (): JSX.Element => {
  return (
    <Layout>
      <main>
        <p>아이디 입력 하는 Form</p>
        <p>아이디 입력 후 클릭하는 버튼</p>
        <p>--</p>
        <p>이메일로 비밀번호 초기화 링크 전송함</p>
      </main>
    </Layout>
  );
};

export default PasswordResetPage;
