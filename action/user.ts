import { UserFormType } from "@/types/loginFormType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

// API 서버를 등록함
axios.defaults.baseURL = "https://strapi.kspark.link";

// 회원가입
export const signup = createAsyncThunk(
  "user/signup",
  async (data: UserFormType, { rejectWithValue }) => {
    try {
      const response = await axios.post("/signup", data);
      return response.data;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

// 로그인
export const logIn = createAsyncThunk(
  "/auth/login",
  async (data: UserFormType, { rejectWithValue }) => {
    try {
      // HTTP 요청을 보낸다.
      const response: AxiosResponse<any> = await axios.post(
        "/auth/local",
        data,
      );
      // HTTP 요청 성공 시 Cookies에 JWT 토큰이 추가된다.
      Cookies.set("strapi-login", response.data?.jwt);
      return response.data;
    } catch (error) {
      // HTTP 요청 실패 시 catch로 예외처리 된다.
      return rejectWithValue(error.response.data);
    }
  },
);

// 로그아웃
export const logOut = createAsyncThunk("/user/logOut", async () => {
  const response = await axios.post("/logout");
  return response.data;
});

// 로그인 상태 불러오기
export const loadUser = createAsyncThunk("/user/load", async () => {
  const response = await axios.get("/user");
  // console.log(response.data);
  return response.data;
});
