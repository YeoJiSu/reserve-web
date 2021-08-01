const LoginStateComponent = ({ isLogin }): JSX.Element => {
  // 로그인 상태일 떄
  if (isLogin === true) {
    return (
      <>
        <p>
          <span>나의 기승</span>
          <span>OOO 님</span>
        </p>
      </>
    );
  }

  //  로그인 상태가 아닐 때
  return (
    <>
      <div>
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </>
  );
};

export default LoginStateComponent;
