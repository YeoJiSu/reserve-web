import React from "react";
import FooterContainer from "./FooterComponent/Footer.Container";
import HeaderContainer from "./HeaderComponent/Header.Container";

interface Props {
  children?: React.ReactNode;
}
const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <HeaderContainer />
      <span>{children}</span>
      <FooterContainer />
    </>
  );
};

export default Layout;
