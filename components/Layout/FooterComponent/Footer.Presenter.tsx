import React from "react";
import { FooterSS } from "./Footer.style";

const FooterPresenter = (): JSX.Element => {
  return (
    <>
      <FooterSS>
        <div className={"footer-top"}>
          <div className={"image"}>
            <img className="phoneImage1" alt="icon1" src="icon1.png" />
            //footer 프롭스 받아오기
            <img className="phoneImage2" alt="icon2" src="icon2.png" />
          </div>
          <div className={"num"}>
            <span>010-2542-3650</span>
            <span>duwltn1301@naver.com</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © 2020 LoveHORSE Inc.</span>
        </div>
      </FooterSS>
    </>
  );
};
export default FooterPresenter;
