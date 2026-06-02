import { movieClient } from "./movieClient";
import type { MovieDetail } from "../types/movie";

export const getMovieDetail = async (movieId: string): Promise<MovieDetail> => {
  const response = await movieClient.get<MovieDetail>(`/movie/${movieId}`, {
    params: {
      language: "ko-KR",
    },
  });

  return response.data;
};
