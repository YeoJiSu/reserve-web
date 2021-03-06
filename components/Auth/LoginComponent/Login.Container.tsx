import React, { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../../hooks/useInput";
import LoginPresenter from "./Login.Presenter";
import { loginAPI } from "lib/api/auth";
import { userType } from "@/types/userType";
import { userAcions } from "@/store/user";

const LoginContainer = (): JSX.Element => {
  // Input Hooks
  const [identifier, onChangeIdentifier] = useInput("");
  const [password, onChangePassword] = useInput("");

  // 비밀번호 이슈 발생 시 focus를 맞춘다. => ref HTML 객체 다룰때 사용함.
  const passwordInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  // 로그인 이벤트
  const onSubmitLogIn = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const { data }: { data: userType } = await loginAPI({
          identifier,
          password,
        });
        dispatch(userAcions.setLoggedUser(data));
      } catch (e) {
        console.log(e);
      }
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
      password={password}
    />
  );
};

export default LoginContainer;
