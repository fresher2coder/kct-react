//Context, Provider, Consumer
import { createContext, useContext, useState } from "react";

const initialMovies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", watched: false },
  { id: 2, title: "Titanic", genre: "Romance", watched: true },
  { id: 3, title: "Avengers", genre: "Action", watched: false },
];

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const { children } = props;
  const [movies, setMovies] = useState(initialMovies);
  const toggleWatched = (id) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  return (
    <>
      <MovieContext.Provider value={{ movies, toggleWatched }}>
        {children}
      </MovieContext.Provider>
    </>
  );
};

export const useMovie = () => useContext(MovieContext);
