import React from "react";
import { FooterSS } from "./Footer.style";

const FooterPresenter = () => {
  return (
    <>
      <FooterSS>
        <div className="footer-top">
          <p>010-2542-3650</p>
          <p>duwltn1301@naver.com</p>
        </div>
        <div className="footer-bottom">
          <span>Copyright © 2020 LoveHORSE Inc.</span>
        </div>
      </FooterSS>
    </>
  );
};
export default FooterPresenter;
