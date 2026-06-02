import { movieClient } from "./movieClient";
import type { MovieListResponse } from "../types/movie";

export const getMovieList = async (
  page: number,
): Promise<MovieListResponse> => {
  const response = await movieClient.get<MovieListResponse>("/discover/movie", {
    params: {
      language: "ko-KR",
      page,
    },
  });

  return response.data;
};
