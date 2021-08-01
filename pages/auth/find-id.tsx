import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import wrapper from "store/configureStore";
import axios from "axios";

import { loadUser } from "@/action/user";
import { RootState } from "@/slices/index";
import { logOut } from "@/action/user";
import Router from "next/router";
const FindIDPage = (): JSX.Element => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const { email, nickname } = useSelector(
    (state: RootState) => state.user.user,
  );

  useEffect(() => {}, []);
  setTimeout(() => {
    // console.log(isLoggedIn);
  }, 2000);

  return (
    <>
      <div>
        <h1>
          <input type="text" />
          <strong>{nickname}님</strong> 환영합니다.
        </h1>
        <p>{email}</p>
      </div>
    </>
  );
};

export default FindIDPage;
