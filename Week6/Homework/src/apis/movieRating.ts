import { movieClient } from "./movieClient";
import type { MovieListResponse } from "../types/movie";

const GUEST_SESSION_STORAGE_KEY = "tmdb_guest_session_id";

type GuestSessionResponse = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

type RatingResponse = {
  success: boolean;
  status_code: number;
  status_message: string;
};

export const getGuestSessionId = async () => {
  const savedGuestSessionId = localStorage.getItem(GUEST_SESSION_STORAGE_KEY);

  if (savedGuestSessionId) {
    return savedGuestSessionId;
  }

  const response = await movieClient.get<GuestSessionResponse>(
    "/authentication/guest_session/new",
  );

  localStorage.setItem(
    GUEST_SESSION_STORAGE_KEY,
    response.data.guest_session_id,
  );

  return response.data.guest_session_id;
};

export const getRatedMovies = async (
  guestSessionId: string,
): Promise<MovieListResponse> => {
  const response = await movieClient.get<MovieListResponse>(
    `/guest_session/${guestSessionId}/rated/movies`,
    {
      params: {
        language: "ko-KR",
      },
    },
  );

  return response.data;
};

export const postMovieRating = async ({
  movieId,
  rating,
  guestSessionId,
}: {
  movieId: number;
  rating: number;
  guestSessionId: string;
}): Promise<RatingResponse> => {
  const response = await movieClient.post<RatingResponse>(
    `/movie/${movieId}/rating`,
    {
      value: rating,
    },
    {
      params: {
        guest_session_id: guestSessionId,
      },
    },
  );

  return response.data;
};

export const deleteMovieRating = async ({
  movieId,
  guestSessionId,
}: {
  movieId: number;
  guestSessionId: string;
}): Promise<RatingResponse> => {
  const response = await movieClient.delete<RatingResponse>(
    `/movie/${movieId}/rating`,
    {
      params: {
        guest_session_id: guestSessionId,
      },
    },
  );

  return response.data;
};
