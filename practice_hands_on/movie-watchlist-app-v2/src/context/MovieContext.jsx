//Context, Provider, Consumer
import { createContext, useContext, useEffect, useState } from "react";
import initialMovies from "../data/initialMovies";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const { children } = props;

  const [movies, setMovies] = useState(initialMovies);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = movies.filter((movie) => movie.favorite);
    setFavorites(favs);
  }, [movies]);

  const addMovie = (movie) => setMovies([...movies, movie]);

  const toggleWatched = (id) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const toggleFavorite = (id) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  return (
    <>
      <MovieContext.Provider
        value={{
          movies,
          addMovie,
          toggleWatched,
          deleteMovie,
          favorites,
          toggleFavorite,
        }}
      >
        {children}
      </MovieContext.Provider>
    </>
  );
};

export const useMovie = () => useContext(MovieContext);
