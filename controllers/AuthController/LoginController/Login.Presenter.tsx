import Link from "next/link";
import React from "react";

import {
  LocalSignupBox,
  LoginContainer,
  LoginFormBox,
  LoginHeader,
  LoginWrapper,
} from "./Login.Style";

interface LoginProps {
  onSubmitLogIn: (e) => void;
  identifier: string;
  password: string;
  onChangeIdentifier: (e) => void;
  passwordInput: React.MutableRefObject<HTMLInputElement>;
  onChangePassword: (e) => void;
}

const LoginPresenter = ({
  onSubmitLogIn,
  identifier,
  onChangeIdentifier,
  passwordInput,
  onChangePassword,
  password,
}: LoginProps): JSX.Element => {
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginHeader>
            <h1>로그인</h1>
            <p>
              {`${process.env.SERVICE_NAME}의 다양한 혜택을 ${process.env.SERVICE_NAME} 회원가입을 통해 편리하게 이용하세요.`}
            </p>
          </LoginHeader>
          <LoginFormBox onSubmit={onSubmitLogIn}>
            {/* 컴포넌트화가 필요함 */}
            <div>
              <label></label>
              <input
                type="text"
                value={identifier}
                placeholder="이메일을 입력해주세요."
                onChange={onChangeIdentifier}
              />
            </div>
            <div>
              <label></label>
              <input
                type="password"
                ref={passwordInput}
                value={password}
                placeholder="비밀번호를 입력해주세요."
                onChange={onChangePassword}
              />
            </div>
            <button type="submit">로그인</button>
          </LoginFormBox>
          <LocalSignupBox>
            <p>아직 회원이 아니신가요?</p>
            <div>
              <Link href="/auth/register">회원가입</Link>
            </div>
          </LocalSignupBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default LoginPresenter;
