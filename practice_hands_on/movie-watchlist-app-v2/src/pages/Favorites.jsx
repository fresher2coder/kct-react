import React, { useContext } from "react";
import { useMovie } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovie();

  return (
    <div className="app-container">
      <h1 className="main-title">❤️ Favorite Movies</h1>
      <div className="user-list">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
