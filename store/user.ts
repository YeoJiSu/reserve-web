/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserFormType, userType } from "@/types/userType";

// 초기값
const initialState = {
  jwt: "",
  user: {
    id: 0,
    username: "",
    email: "",
    provider: "",
    confirmed: false,
    blocked: false,
    role: {
      id: 0,
      name: "",
      description: "",
      type: "",
    },
    created_at: "",
    updated_at: "",
    user_id: "",
    tel: "",
    private: false,
    third_party: false,
    own: false,
    permission: 0,
    socials: [],
    purchases: [],
    reserve: [],
    company: [],
    follows: [],
  },
  isLogged: false,
};

const userSlice = createSlice({
  name: "user", // 슬라이스 Name
  initialState, // 초기값
  // 리듀서 맵
  reducers: {
    setLoggedUser(state, action: PayloadAction<userType>) {
      state = { ...action.payload, isLogged: true };
    },
  },
});

export const userAcions = { ...userSlice.actions };

export default userSlice;
