import React from "react";
import { HeaderSS } from "@/components/Layout/HeaderComponent//Header.style";
import Logo from "@/assets/logo.svg";
import LoginStateComponent from "@/components/Common/Login/LoginStateComponent";

const HeaderPresenter = ({ isLogin }) => {
  return (
    <>
      <HeaderSS isLogin={isLogin}>
        <div className="header-top">
          <div className="header-logo">
            <Logo width="100px" height="auto" color="red" />
          </div>
          <div className="header-login">
            <LoginStateComponent isLogin={isLogin} />
          </div>
        </div>
        <div className="header-bottom">
          {/*<h1>ㅇㅖ약</h1>*/}
          <ul>
            <li>빠른 예약</li>
            <li>이용 안내</li>
            <li>이잉?</li>
          </ul>
        </div>
      </HeaderSS>
    </>
  );
};

export default HeaderPresenter;
