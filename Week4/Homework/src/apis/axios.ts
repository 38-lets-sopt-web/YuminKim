import axios from "axios";

export const api = axios.create({
  baseURL: "https://sopt-server.p-e.kr/",
});
