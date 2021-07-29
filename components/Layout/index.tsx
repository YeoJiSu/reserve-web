import React from 'react';
import FooterContainer from './FooterComponent/Footer.Container';
import HeaderContainer from './HeaderComponent/Header.Container';

const Layout = (asd) => {
  console.log(asd);
  return (
    <>
      <HeaderContainer />
      <span>{asd.children}</span>
      <FooterContainer />
    </>
  );
};

export default Layout;