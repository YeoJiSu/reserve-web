import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "@/action/user";
import useInput from "../../../hooks/useInput";
import { RootState } from "@/slices/index";
import LoginPresenter from "./Login.Presenter";

const LoginContainer = (): JSX.Element => {
  // Input Hooks
  const [identifier, onChangeIdentifier] = useInput("");
  const [password, onChangePassword] = useInput("");

  // ID Check
  const [identifierError, setIdentifierError] = useState(false);
  // Password Check
  const [passwordError, setPasswordError] = useState(false);
  // 로딩
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  // Error 메세지
  const logInError = useSelector((state: RootState) => state.user.logInError);
  // 비밀번호 이슈 발생 시 focus를 맞춘다. => ref HTML 객체 다룰때 사용함.
  const passwordInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  // Error 메세지의 상태를 관리함
  useEffect(() => {
    if (logInError) {
      if (logInError === "비밀번호가 일치하지 않습니다.") {
        setPasswordError(true);
        passwordInput.current?.focus();
      } else {
        setIdentifierError(true);
      }
    }
  }, [logInError]);

  // 로그인 이벤트
  const onSubmitLogIn = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        logIn({
          identifier,
          password,
        }),
      );
    },
    [identifier, password, dispatch],
  );

  return (
    <LoginPresenter
      onSubmitLogIn={onSubmitLogIn}
      identifier={identifier}
      onChangeIdentifier={onChangeIdentifier}
      passwordInput={passwordInput}
      onChangePassword={onChangePassword}
      identifierError={identifierError}
      passwordError={passwordError}
      isLoading={isLoading}
      logInError={logInError}
      password={password}
    />
  );
};

export default LoginContainer;
