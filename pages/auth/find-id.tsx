import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store/index";
import asyncComponent from "@/components/_Common/asyncComponent";

const FindID = asyncComponent(
  () =>
    import("@/controllers/AuthController/FindIDController/FindID.Container"),
);

const FindIDPage = (): JSX.Element => {
  // const { email, data } = useSelector((state: RootState) => state.user.user);
  const data = useSelector((state: RootState) => state.user.user);
  console.log("useSelector", data);

  useEffect(() => {}, []);
  setTimeout(() => {
    // console.log(isLoggedIn);
  }, 2000);

  return (
    <>
      <FindID>
        <div>
          <h1>
            <strong>{data.username}님</strong> 환영합니다.
          </h1>
          <p>{data.email}</p>
        </div>
      </FindID>
    </>
  );
};

export default FindIDPage;
