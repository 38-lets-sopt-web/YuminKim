import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "../../apis/movieList";
import MovieCard from "./components/MovieCard";
import RatingFilter from "./components/RatingFilter";

function MovieListPage() {
  const [rating, setRating] = useState(0);

  const { data, isPending, isError } = useQuery({
    queryKey: ["movies", rating],
    queryFn: () => getMovieList(1, rating),
  });

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>영화 목록을 불러오지 못했습니다.</div>;

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">🎬 영화 목록</h1>

      <RatingFilter rating={rating} onChangeRating={setRating} />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}

export default MovieListPage;
