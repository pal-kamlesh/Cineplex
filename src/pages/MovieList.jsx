/* eslint-disable react/prop-types */
import { Card } from "../components/Card";
import { useDocTitle } from "../hooks/useDocTitle";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ path, title }) => {
  const { data: movieList } = useFetch(path);
  useDocTitle(title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movieList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
