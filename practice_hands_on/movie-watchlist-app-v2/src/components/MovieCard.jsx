import React from "react";
import "../App.css";
import { useMovie } from "../context/MovieContext";

const MovieCard = (props) => {
  const { movie } = props;
  const { toggleWatched, deleteMovie, toggleFavorite } = useMovie();
  return (
    <div className={`movie-card ${movie.watched ? "watched" : ""}`}>
      <div className="movie-header">
        <h3>
          {movie.title} ({movie.year})
        </h3>
        <span className="genre-tag">{movie.genre}</span>
      </div>

      <p>
        Status: <strong>{movie.watched ? "Watched 🎬" : "To Watch 🍿"}</strong>
      </p>

      <div className="movie-actions">
        <button onClick={() => toggleWatched(movie.id)}>
          {movie.watched ? "Mark Unwatched" : "Mark Watched"}
        </button>
        <button onClick={() => toggleFavorite(movie.id)}>
          {movie.favorite ? "💔" : "❤️"}
        </button>
        <button onClick={() => deleteMovie(movie.id)} className="delete-btn">
          🗑️
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
