import { useEffect, useState } from "react";

export const useFetch = ({ path, queryTerm = "", page = 1 }) => {
  const [data, setDate] = useState({});
  const url = `https://api.themoviedb.org/3/${path}?api_key=${
    import.meta.env.VITE_API_KEY
  }&query=${queryTerm}&page=${page}`;
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url);
      const data = await res.json();
      setDate(data);
    }
    fetchMovies();
  }, [url, path, page]);
  return { data };
};
