import { UserFormType } from "@/types/userType";
import axios from "@/utils/axios";

// result에 대한 타입 추가필요
export const loginAPI: any = async (body: UserFormType) => {
  const result = await axios.post("/auth/local", body);
  return result;
};
