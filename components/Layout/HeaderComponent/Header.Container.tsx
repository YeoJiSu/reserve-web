import { RootState } from "@/slices/index";
import React, { useEffect, useState } from "react";
import HeaderPresenter from "./Header.Presenter";
import { useSelector } from "react-redux";

const HeaderContainer = (): JSX.Element => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const isUserData = useSelector((state: RootState) => state.user.user.data);
  const [loginState, setLoginState] = useState<boolean>(isLoggedIn);

  console.log(isUserData);
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
