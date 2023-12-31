import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages/index";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800 bg-gray-200">
      <Routes>
        <Route
          path="/"
          element={<MovieList path="movie/now_playing" title="Home" />}
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/movies/popular"
          element={<MovieList path="movie/popular" title="Popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList path="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList path="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search path="search/movie" />} />
        <Route path="*" element={<PageNotFound title="404" />} />
      </Routes>
    </div>
  );
};
