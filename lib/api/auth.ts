import { UserFormType } from "@/types/userType";
import axios from "@/utils/axios";

export const loginAPI = async (body: UserFormType) => {
  const result = await axios.post("/auth/local", body);
  return result;
};
