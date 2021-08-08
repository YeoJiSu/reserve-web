import React from "react";
import { HeaderSS } from "@/components/Layout/HeaderComponent//Header.style";

import LoginStateComponent from "@/components/_Common/Login/LoginStateComponent";
import Link from "next/link";

interface HeaderPresenterProps {
  isLoggedIn: boolean;
}
const HeaderPresenter = ({ isLoggedIn }: HeaderPresenterProps): JSX.Element => {
  return (
    <>
      <HeaderSS isLoggedIn={isLoggedIn}>
        <div className={"header-top"}>
          <p>
            🦄 러브 홀스 <a>love horse</a>
          </p>
          <div className={"header-login"}>
            <LoginStateComponent isLoggedIn={isLoggedIn} />
          </div>
        </div>
        <div className="header-bottom">
          {/*<h1>ㅇㅖ약</h1>*/}
          <hr />
          <ul>
            <li className="dropDown">
              <Link href="/quick-reserve">
                <a>빠른 예약</a>
              </Link>
            </li>
            <li>
              <Link href="/horse-riding/search">
                <a>승마장 찾기</a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a>문의 Q & A</a>
              </Link>
            </li>
            <li>
              <Link href="/help/abouts">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </HeaderSS>
    </>
  );
};

export default HeaderPresenter;
