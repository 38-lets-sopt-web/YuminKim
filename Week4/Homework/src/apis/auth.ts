import { api } from "./axios";

type SignupRequest = {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: string;
  part: string;
};

export const signup = async (signupForm: SignupRequest) => {
  const response = await api.post("/api/v1/auth/signup", signupForm);
  return response.data;
};
