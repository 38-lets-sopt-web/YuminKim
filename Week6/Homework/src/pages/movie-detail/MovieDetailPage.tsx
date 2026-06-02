import { useParams } from "react-router-dom";

function MovieDetailPage() {
  const { movieId } = useParams();

  return <div>영화 상세 페이지: {movieId}</div>;
}

export default MovieDetailPage;
