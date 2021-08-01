import React from "react";
import { HeaderSS } from "@/components/Layout/HeaderComponent//Header.style";

import LoginStateComponent from "@/components/_Common/Login/LoginStateComponent";

const HeaderPresenter = ({ isLogin }) => {
  return (
    <>
      <HeaderSS isLogin={isLogin}>
        <div className={"header-top"}>
          <p>
            🦄 러브 홀스 <a>love horse</a>
          </p>
          <div className={"header-login"}>
            <LoginStateComponent isLogin={isLogin} />
          </div>
        </div>
        <div className="header-bottom">
          {/*<h1>ㅇㅖ약</h1>*/}
          <hr />
          <ul>
            <li>빠른 예약</li>
            <li>승마장 찾기</li>
            <li>문의 Q & A </li>
            <li>About Us</li>
          </ul>
        </div>
      </HeaderSS>
    </>
  );
};

export default HeaderPresenter;
