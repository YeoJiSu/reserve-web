import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import LoginState from "@/components/_Common/Login/LoginState";
import {
  ErrorText,
  LoginFormBox,
  LoginWrapper,
  LoginHeader,
  LoginContainer,
  LocalSignupBox,
} from "@/components/Auth/LoginComponent/Login.Styled";
import { VscLoading } from "react-icons/vsc";

interface LoginProps {
  onSubmitLogIn: (e) => void;
  identifier: string;
  password: string;
  onChangeIdentifier: (e) => void;
  passwordInput: React.MutableRefObject<HTMLInputElement>;
  onChangePassword: (e) => void;
  identifierError: boolean;
  passwordError: boolean;
  isLoading: boolean;
  logInError: string;
}

const LoginPresenter = ({
  onSubmitLogIn,
  identifier,
  onChangeIdentifier,
  passwordInput,
  onChangePassword,
  identifierError,
  passwordError,
  isLoading,
  logInError,
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
            {identifierError && <ErrorText>{logInError}</ErrorText>}
            {passwordError && <ErrorText>{logInError}</ErrorText>}
            <button type="submit">로그인</button>
          </LoginFormBox>
          <LocalSignupBox>
            <p>아직 회원이 아니신가요?</p>
            <div>
              <Link href="/signup">회원가입</Link>
            </div>
          </LocalSignupBox>
          {isLoading && <VscLoading className="loading" />}
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default LoginPresenter;
