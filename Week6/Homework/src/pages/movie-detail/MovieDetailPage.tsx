import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getMovieDetail } from "../../apis/movieDetail";
import MovieBasicInfo from "./components/MovieBasicInfo";
import MovieRatingForm from "./components/MovieRatingForm";

function MovieDetailPage() {
  const { movieId } = useParams();

  const { data, isPending, isError } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieDetail(movieId as string),
    enabled: Boolean(movieId),
  });

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>영화 상세 정보를 불러오지 못했습니다.</div>;

  const posterUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : "";

  const backdropUrl = data.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`
    : "";

  const runtime =
    data.runtime === null
      ? "정보 없음"
      : `${Math.floor(data.runtime / 60)}시간 ${data.runtime % 60}분`;

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="mb-6 inline-block text-gray-300">
          {"<- 목록으로 돌아가기"}
        </Link>

        <section className="overflow-hidden rounded-lg bg-gray-800">
          {backdropUrl && (
            <img
              src={backdropUrl}
              alt={`${data.title} 배경 이미지`}
              className="h-72 w-full object-cover"
            />
          )}

          <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr]">
            {posterUrl && (
              <img
                src={posterUrl}
                alt={`${data.title} 포스터`}
                className="w-full rounded-lg"
              />
            )}

            <div>
              <p className="mb-2 text-gray-300">{data.release_date}</p>
              <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>

              <div className="mb-4 flex flex-wrap gap-2">
                {data.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full bg-gray-700 px-3 py-1 text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <p>평점: {data.vote_average.toFixed(1)} / 10</p>
                <p>상영 시간: {runtime}</p>
                <p>투표 수: {data.vote_count.toLocaleString()}</p>
                <p>상태: {data.status}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-3 text-2xl font-bold">줄거리</h2>
          <p className="leading-7 text-gray-200">
            {data.overview || "등록된 줄거리가 없습니다."}
          </p>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <MovieBasicInfo movie={data} />
          <MovieRatingForm movieId={data.id} />
        </section>
      </div>
    </main>
  );
}

export default MovieDetailPage;
