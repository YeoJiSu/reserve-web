import React from 'react';
import HeaderContainer from './HeaderComponent/Header.Container';

const Layout = (asd) => {
  console.log(asd);
  return (
    <>
      <HeaderContainer />
      <span>{asd.children}</span>
    </>
  );
};

export default Layout;
