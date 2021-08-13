import React from "react";
import { HeaderSS } from "@/components/Layout/HeaderComponent//Header.style";

import LoginStateComponent from "@/components/_Common/Login/LoginStateComponent";
import Link from "next/link";

interface HeaderPresenterProps {
  isLoggedIn: boolean;
  isUserData?: any;
}
const HeaderPresenter = ({
  isLoggedIn,
  isUserData,
}: HeaderPresenterProps): JSX.Element => {
  return (
    <>
      <HeaderSS isLoggedIn={isLoggedIn}>
        <div className={"header-top"}>
          <div className={"logo"}>
            <Link href="/">
              <a>
                <img src={"logo.png"} width="200px" alt="" />
              </a>
            </Link>
          </div>

          <div className={"header-login"}>
            <LoginStateComponent
              isLoggedIn={isLoggedIn}
              isUserData={isUserData}
            />
          </div>
          <div className={"pages"}>
            <ul>
              <li>
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
        </div>

        <div className={"description"}>
          <img src={"menu.png"} width="100px" alt="" />
        </div>
        <div className="reserve">
          <p>
            <span>빠른예약 gogo</span>
          </p>
        </div>
      </HeaderSS>
    </>
  );
};

export default HeaderPresenter;
