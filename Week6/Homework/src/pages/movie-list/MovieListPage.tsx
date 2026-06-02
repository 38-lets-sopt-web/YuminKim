import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovieList } from "../../apis/movieList";
import MovieCard from "./components/MovieCard";
import RatingFilter from "./components/RatingFilter";

function MovieListPage() {
  const [rating, setRating] = useState(0);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", rating],
    queryFn: ({ pageParam }) => getMovieList(pageParam, rating),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>영화 목록을 불러오지 못했습니다.</div>;

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">🎬 영화 목록</h1>

      <RatingFilter rating={rating} onChangeRating={setRating} />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>

      <div ref={observerRef} className="h-10" />

      {isFetchingNextPage && (
        <p className="mt-6 text-center text-gray-300">더 불러오는 중...</p>
      )}
    </main>
  );
}

export default MovieListPage;
