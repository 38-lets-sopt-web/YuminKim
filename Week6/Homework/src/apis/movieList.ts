import { movieClient } from "./movieClient";
import type { MovieListResponse } from "../types/movie";

export const getMovieList = async (
  page: number,
  rating: number,
): Promise<MovieListResponse> => {
  const response = await movieClient.get<MovieListResponse>("/discover/movie", {
    params: {
      language: "ko-KR",
      page,
      "vote_average.gte": rating,
    },
  });

  return response.data;
};
