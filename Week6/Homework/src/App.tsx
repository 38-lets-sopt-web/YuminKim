import { Route, Routes } from "react-router-dom";
import MovieListPage from "./pages/movie-list/MovieListPage";
import MovieDetailPage from "./pages/movie-detail/MovieDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieListPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailPage />} />
    </Routes>
  );
}

export default App;
