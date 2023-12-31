import { useEffect, useState } from "react";

export const useFetch = (sub_path, queryTerm = "") => {
  const [data, setDate] = useState([]);
  const url = `https://api.themoviedb.org/3/${sub_path}?api_key=${
    import.meta.env.VITE_API_KEY
  }&query=${queryTerm}`;
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url);
      const data = await res.json();
      setDate(data.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};
