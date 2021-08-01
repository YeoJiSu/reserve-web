import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/slices/index";
const FindIDPage = (): JSX.Element => {
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
