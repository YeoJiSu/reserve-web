import React from "react";
import Link from "next/link";
const LoginStateComponent = ({ isLoggedIn }): JSX.Element => {
  // 로그인 상태일 떄
  if (isLoggedIn === true) {
    return (
      <>
        <p>
          <span>예약 조회</span>
          <span>팔로잉</span>
          <span>OOO 님</span>
          <span>로그아웃</span>
        </p>
      </>
    );
  }

  //  로그인 상태가 아닐 때
  return (
    <>
      <p>
        <span>
          <Link href="/auth/login">로그인</Link>
        </span>
        <span>
          <Link href="/auth/register">회원가입</Link>
        </span>
      </p>
    </>
  );
};

export default LoginStateComponent;
