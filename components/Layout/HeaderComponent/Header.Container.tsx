import { RootState } from "@/store/index";
import React, { useEffect, useState } from "react";
import HeaderPresenter from "./Header.Presenter";
import { useSelector } from "react-redux";

const HeaderContainer = (): JSX.Element => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLogged);
  const isUserData = useSelector((state: RootState) => state.user.user);
  const [loginState, setLoginState] = useState<boolean>(isLoggedIn);

  useEffect(() => {
    if (loginState !== undefined) {
      setLoginState(isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <>
      <HeaderPresenter isLoggedIn={isLoggedIn} isUserData={isUserData} />
    </>
  );
};

export default HeaderContainer;
