import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteMovieRating,
  getGuestSessionId,
  getRatedMovies,
  postMovieRating,
} from "../../../apis/movieRating";

type MovieRatingFormProps = {
  movieId: number;
};

function MovieRatingForm({ movieId }: MovieRatingFormProps) {
  const queryClient = useQueryClient();
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const { data: guestSessionId } = useQuery({
    queryKey: ["guest-session"],
    queryFn: getGuestSessionId,
  });

  const { data: ratedMovies, isError: isRatedMoviesError } = useQuery({
    queryKey: ["rated-movies", guestSessionId],
    queryFn: () => getRatedMovies(guestSessionId as string),
    enabled: Boolean(guestSessionId),
  });

  useEffect(() => {
    if (isRatedMoviesError) {
      setRating("");
      return;
    }

    if (!ratedMovies) return;

    const ratedMovie = ratedMovies.results.find(
      (movie) => movie.id === movieId,
    );

    if (ratedMovie?.rating !== undefined) {
      setRating(String(ratedMovie.rating));
      return;
    }

    setRating("");
  }, [movieId, ratedMovies, isRatedMoviesError]);

  const saveRatingMutation = useMutation({
    mutationFn: (value: number) => {
      if (!guestSessionId) {
        throw new Error("게스트 세션이 없습니다.");
      }

      return postMovieRating({
        movieId,
        rating: value,
        guestSessionId,
      });
    },
    onSuccess: () => {
      setMessage("별점이 저장되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["rated-movies", guestSessionId],
      });
    },
  });

  const deleteRatingMutation = useMutation({
    mutationFn: () => {
      if (!guestSessionId) {
        throw new Error("게스트 세션이 없습니다.");
      }

      return deleteMovieRating({
        movieId,
        guestSessionId,
      });
    },
    onSuccess: () => {
      setRating("");
      setMessage("별점이 삭제되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["rated-movies", guestSessionId],
      });
    },
  });

  const handleSaveRating = () => {
    const ratingNumber = Number(rating);

    if (Number.isNaN(ratingNumber) || ratingNumber < 0.5 || ratingNumber > 10) {
      setMessage("0.5 이상 10 이하의 숫자를 입력해주세요.");
      return;
    }

    saveRatingMutation.mutate(ratingNumber);
  };

  const handleDeleteRating = () => {
    deleteRatingMutation.mutate();
  };

  return (
    <section className="rounded-lg bg-gray-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">별점 남기기</h2>

      <label className="mb-3 block">
        <span className="mb-2 block text-sm text-gray-300">0.5 ~ 10.0</span>
        <input
          type="number"
          min={0.5}
          max={10}
          step={0.5}
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          className="w-full rounded-md bg-gray-900 px-3 py-2 text-white"
        />
      </label>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleSaveRating}
          disabled={saveRatingMutation.isPending}
          className="rounded-md bg-white px-4 py-2 font-semibold text-gray-950"
        >
          별점 저장
        </button>

        <button
          type="button"
          onClick={handleDeleteRating}
          disabled={deleteRatingMutation.isPending}
          className="rounded-md border border-gray-500 px-4 py-2 text-gray-200"
        >
          별점 삭제하기
        </button>
      </div>

      {message && <p className="mt-4 text-sm text-green-300">{message}</p>}
    </section>
  );
}

export default MovieRatingForm;
