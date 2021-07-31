import { RootState } from "@/slices/index";
import React, { useEffect, useState } from "react";
import HeaderPresenter from "./Header.Presenter";
import { useSelector } from "react-redux";

const HeaderContainer = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [loginState, setLoginState] = useState<boolean>(isLoggedIn);

  console.log(isLoggedIn);
  useEffect(() => {
    if (loginState !== undefined) {
      setLoginState(isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <>
      <HeaderPresenter isLoggedIn={isLoggedIn} />
    </>
  );
};

export default HeaderContainer;
