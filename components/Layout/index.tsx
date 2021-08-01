import React from "react";
import FooterContainer from "./FooterComponent/Footer.Container";
import HeaderContainer from "./HeaderComponent/Header.Container";
import BodyContainer from "./BodyComponent/Body.Container";

interface Props {
  children?: React.ReactNode;
}
const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <HeaderContainer />
      <BodyContainer />
      <span>{children}</span>
      <FooterContainer />
    </>
  );
};

export default Layout;
