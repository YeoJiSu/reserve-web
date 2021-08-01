import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger"; // 리덕스 로깅 라이브러리

import rootReducer from "../slices";

// 개발모드 체크
const isDev = process.env.NODE_ENV === "development";

const createStore = () => {
  const middleware = getDefaultMiddleware();
  if (isDev) {
    middleware.push(logger); // 개발모드라면 미들웨어에 logger 추가
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: isDev, // 개발모드라면 리덕스 데브툴즈 사용
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: isDev,
});

export default wrapper;
