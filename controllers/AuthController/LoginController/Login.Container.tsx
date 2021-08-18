import "react-toastify/dist/ReactToastify.css";

import { userAcions } from "@/store/user";
import { userType } from "@/types/userType";
import useInput from "hooks/useInput";
import { loginAPI } from "lib/api/auth";
import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import LoginPresenter from "./Login.Presenter";

const LoginContainer: React.FC = (): JSX.Element => {
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
        console.log("로그인됨", data);
        dispatch(userAcions.setLoggedUser(data));
        toast(`로그인 됨 ${data.user.username}`);
      } catch (e) {
        console.log(e);
      }
    },
    [identifier, password, dispatch],
  );

  return (
    <>
      <LoginPresenter
        onSubmitLogIn={onSubmitLogIn}
        identifier={identifier}
        onChangeIdentifier={onChangeIdentifier}
        passwordInput={passwordInput}
        onChangePassword={onChangePassword}
        password={password}
      />
      <ToastContainer />
    </>
  );
};

export default LoginContainer;
