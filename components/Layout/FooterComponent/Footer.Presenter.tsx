import React from "react";
import { FooterSS } from "./Footer.style";

const FooterPresenter = (): JSX.Element => {
  return (
    <>
      <FooterSS>
        <div className={"footer-top"}>
          <div className={"image"}>
            <p>
              <img
                className="phoneImage"
                width="150px"
                alt="icon1"
                src="icon1.png"
              />
            </p>
            <p>
              <img
                className="phoneImage"
                width="150px"
                alt="icon2"
                src="icon2.png"
              />
            </p>
          </div>
          <div className={"num"}>
            <p>010-2542-3650</p>
            <p>duwltn1301@naver.com</p>
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
