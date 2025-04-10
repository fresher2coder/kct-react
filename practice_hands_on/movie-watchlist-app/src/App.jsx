import React, { useState } from "react";
import MovieList from "./components/MovieList.jsx";
import MovieStats from "./components/MovieStats";
import "./App.css";

const initialMovies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", watched: false },
  { id: 2, title: "Titanic", genre: "Romance", watched: true },
  { id: 3, title: "Avengers", genre: "Action", watched: false },
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);

  const toggleWatched = (id) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="main-title fade-in">My Movie Watchlist</h1>

      <MovieStats movies={movies} />
      <MovieList movies={movies} toggleWatched={toggleWatched} />
    </div>
  );
};

export default App;
