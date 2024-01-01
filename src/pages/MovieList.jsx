/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { useDocTitle } from "../hooks/useDocTitle";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ path, title }) => {
  const [page, setPage] = useState(1);
  const { data } = useFetch({ path, page });
  useDocTitle(title);
  useEffect(() => {
    setPage(1);
  }, [path]);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {data.results?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      <Pagination
        current={data.page}
        total={data.total_pages}
        setPage={setPage}
      />
    </main>
  );
};
