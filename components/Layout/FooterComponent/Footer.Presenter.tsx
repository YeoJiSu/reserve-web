import React from "react";
import { FooterStyle } from "./Footer.style";

const FooterPresenter = (): JSX.Element => {
  return (
    <>
      <FooterStyle>
        <div className="footer-right">
          <a onClick={(e) => console.log(e)}>
            <img className="images" alt="icon1" src="icon1.png" />
          </a>
          <a onClick={(e) => console.log(e)}>
            <img className="images" alt="icon2" src="icon2.png" />
          </a>
        </div>
        <div className="footer-left">
          <p className="footer-title">
            🦄 러브 홀스 <span>love horse</span>
          </p>
          <p className="footer-links">
            <a href="#">빠른예약</a>
            <a href="#">승마장 찾기</a>
            <a href="#">문의 Q & A</a>
            <a href="#">About Us</a>
          </p>
          <p>010-2542-3650 | duwltn1301@naver.com</p>
          <p>Copyright © 2020 LoveHORSE Inc.</p>
        </div>
      </FooterStyle>
    </>
  );
};
export default FooterPresenter;
