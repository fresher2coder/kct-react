import React from "react";
import { useMovie } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { toggleWatched, toggleFavorite, deleteMovie } = useMovie();
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
      <button onClick={() => toggleFavorite(movie.id)} className="fav-btn">
        ❤️ {movie.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button onClick={() => deleteMovie(movie.id)} className="delete-btn">
        ❌ Delete
      </button>
    </div>
  );
};

export default MovieCard;
