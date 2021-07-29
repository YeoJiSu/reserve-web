import React from 'react';
import { HeaderSS } from './Header.style';

const HeaderPresenter = () => {
  const isLogin = false;

  return (
    <>
      <HeaderSS isLogin={isLogin}>
        <div className={'header-top'}>
          <div className={'header-login'}>
            <p> 러브 홀스</p>
            {isLogin ? (
              <p>
                <span>나의 기승</span>
                <span>OOO 님</span>
              </p>
            ) : (
              <span>로그인 / 회원가입 </span>
            )}
          </div>
        </div>
        <div className={'header-bottom'}>
          {/*<h1>ㅇㅖ약</h1>*/}
          <ul>
            <li>빠른 예약</li>
            <li>이용 안내</li>
            <li></li>
          </ul>
        </div>
      </HeaderSS>
    </>
  );
};

export default HeaderPresenter;
