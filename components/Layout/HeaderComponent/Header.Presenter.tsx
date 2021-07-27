import React from 'react';
import { HeaderSS } from './Header.style';

const HeaderPresenter = () => {
  const isLogin = false;

  return (
    <>
      <HeaderSS isLogin={isLogin}>
        <div className={'header-top'}>
          <div className={'header-login'}>
            {isLogin ? <span>로그인/회원가입</span> : <span>OOO 님</span>}
          </div>
        </div>
        <div className={'header-bottom'}>
          <h1>로고</h1>
          <ul>
            <li>빠른 예약</li>
            <li>승마장 보러가기</li>
          </ul>
        </div>
      </HeaderSS>
    </>
  );
};

export default HeaderPresenter;
