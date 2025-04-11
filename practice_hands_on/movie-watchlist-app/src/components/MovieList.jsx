// components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";
import { useMovie } from "../context/MovieContext";

const MovieList = () => {
  const { movies } = useMovie();
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
