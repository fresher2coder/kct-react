// components/MovieStats.js
import React, { useEffect, useState } from "react";
import { useMovie } from "../context/MovieContext";

const MovieStats = () => {
  const { movies } = useMovie();
  const [genreCount, setGenreCount] = useState({});

  const total = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;

  useEffect(() => {
    const count = movies.reduce((acc, movie) => {
      acc[movie.genre] = (acc[movie.genre] || 0) + 1;
      return acc;
    }, {});
    setGenreCount(count);
  }, [movies]);

  return (
    <div className="movie-stats fade-in">
      <h2>Movie Stats</h2>
      <p>Total Movies: {total}</p>
      <p>Watched: {watchedCount}</p>
      <div>
        <p>Genres:</p>
        <ul>
          {Object.entries(genreCount).map(([genre, count]) => (
            <li key={genre}>
              {genre}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieStats;
