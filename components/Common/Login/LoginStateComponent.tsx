const LoginStateComponent = ({ isLogin }): JSX.Element => {
  // 로그인 상태일 떄
  if (isLogin === true) {
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
        <span>로그인</span>
        <span>회원가입</span>
      </p>
    </>
  );
};

export default LoginStateComponent;
