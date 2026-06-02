import { movieClient } from "./movieClient";

export const getMovieDetail = async (movieId: string) => {
  const response = await movieClient.get(`/movie/${movieId}`, {
    params: {
      language: "ko-KR",
    },
  });

  return response.data;
};
