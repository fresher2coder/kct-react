// components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, toggleWatched }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} toggleWatched={toggleWatched} />
      ))}
    </div>
  );
};

export default MovieList;
