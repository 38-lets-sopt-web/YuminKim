import { useNavigate } from "react-router-dom";
import type { Movie } from "../../../types/movie";

type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <article
      className="cursor-pointer rounded-lg bg-gray-800 p-4 text-white shadow-md transition hover:scale-[1.02] hover:shadow-xl"
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      {posterUrl && (
        <img
          src={posterUrl}
          alt={`${movie.title} 포스터`}
          className="mb-4 aspect-[2/3] w-full rounded-md object-cover"
        />
      )}
      <h2 className="mb-2 text-xl font-bold">{movie.title}</h2>
      <p className="mb-2 text-sm text-gray-300">개봉일: {movie.release_date}</p>
      <p className="mb-2 text-sm text-yellow-300">
        평점: {movie.vote_average.toFixed(1)}
      </p>
      <p className="line-clamp-3 text-sm text-gray-200">{movie.overview}</p>
    </article>
  );
}

export default MovieCard;
