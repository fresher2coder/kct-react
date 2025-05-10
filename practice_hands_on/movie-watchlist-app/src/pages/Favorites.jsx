import React from "react";
import { useMovie } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";


const Favorites = () => {
  const { favorites } = useMovie();

  return (
    <div className="favorites-page">
      <h2>❤️ Favorite Movies</h2>

      {favorites.length === 0 ? (
        <p className="empty-message">No favorite movies yet!</p>
      ) : (
        <div className="movie-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
