import { api } from "./axios";

export const getUser = async (userId: string) => {
  const response = await api.get(`/api/v1/users/${userId}`);
  return response.data;
};
