import { api } from "./axios";

export const getUser = async (userId: string) => {
  const response = await api.get(`/api/v1/users/${userId}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get("/api/v1/users");
  return response.data;
};

type UpdateUserRequest = {
  name: string;
  email: string;
  age: number;
};

export const updateUser = async (
  userId: string,
  userInfo: UpdateUserRequest,
) => {
  const response = await api.patch(`/api/v1/users/${userId}`, userInfo);
  return response.data;
};
