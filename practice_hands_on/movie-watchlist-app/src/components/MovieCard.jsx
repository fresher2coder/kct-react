// components/MovieCard.js
import React from "react";
import { useMovie } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { toggleWatched } = useMovie();
  return (
    <div className={`movie-card ${movie.watched ? "watched" : "to-watch"}`}>
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-genre">Genre: {movie.genre}</p>
      <p className="movie-status">
        {movie.watched ? "✅ Watched" : "🎬 To Watch"}
      </p>
      <button onClick={() => toggleWatched(movie.id)} className="watch-btn">
        {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
      </button>
    </div>
  );
};

export default MovieCard;
