/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signup, logIn, logOut, loadUser } from "@/action/user";
import { UserFormType } from "@/types/loginFormType";

// 초기값
const initialState = {
  user: <UserFormType>{
    data: "",
    identifier: "",
    password: "",
  },
  isLoggedIn: false,
  logInError: "",
  signupError: "",
  signupDone: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user", // 슬라이스 Name
  initialState, // 초기값
  // 리듀서 맵
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 회원가입 - 성공
      .addCase(signup.pending, (state, action) => {
        // console.log("pending");
      })
      // 회원가입 - 성공
      .addCase(signup.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.signupDone = true;
      })
      // 회원가입 - 실패
      .addCase(signup.rejected, (state, action: PayloadAction<any>) => {
        state.signupError = action.payload;
      })
      // 로그인 - 요청
      .addCase(logIn.pending, (state, action) => {
        // console.log("logIn.pending");
        // console.log("message ::", logIn);
        state.isLoading = true;
      })
      // 로그인 - 성공
      .addCase(logIn.fulfilled, (state, action) => {
        // console.log("logIn.fulfilled");
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.identifier = action.payload.jwt;
        state.user.data = action.payload.user;
      })
      // 로그인 - 실패
      .addCase(logIn.rejected, (state, action: PayloadAction<any>) => {
        // console.log("logIn.rejected");
        state.isLoading = false;
        state.logInError = action.payload.statusCode;
      })
      // 로그아웃 - 성공
      .addCase(logOut.pending, (state, action) => {})
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      // 로그아웃 - 실패
      .addCase(logOut.rejected, (state, action) => {})
      // 로그인 상태 불러오기
      .addCase(loadUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.identifier = action.payload.identifier;
        state.user.data = action.payload.nick;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default userSlice;
