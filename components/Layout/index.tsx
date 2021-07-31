import React from "react";
import FooterContainer from "./FooterComponent/Footer.Container";
import HeaderContainer from "./HeaderComponent/Header.Container";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <span>{children}</span>
      <FooterContainer />
    </>
  );
};

export default Layout;
