import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";
import { useMovie } from "../context/MovieContext";

const MovieList = () => {
  const { movies } = useMovie();
  if (movies.length === 0) {
    return <p className="no-movies">No movies added yet... 📭</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
