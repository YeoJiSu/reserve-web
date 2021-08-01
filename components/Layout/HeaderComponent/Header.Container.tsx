import React, { useEffect, useState } from "react";
import HeaderPresenter from "./Header.Presenter";

const HeaderContainer = () => {
  const isLogin = false;
  const [loginState, setLoginState] = useState<boolean>(isLogin);

  useEffect(() => {
    if (loginState !== undefined) {
      setLoginState(isLogin);
    }
  }, [isLogin]);

  return (
    <>
      <HeaderPresenter isLogin={isLogin} />
    </>
  );
};

export default HeaderContainer;
