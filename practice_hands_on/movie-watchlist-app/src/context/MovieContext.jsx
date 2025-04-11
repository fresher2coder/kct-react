import { createContext, useContext, useState } from "react";

const initialMovies = [
  { id: 1, title: "Vikram", genre: "Action", watched: true },
  { id: 2, title: "Master", genre: "Action", watched: false },
  { id: 3, title: "96", genre: "Romance", watched: true },
  { id: 4, title: "Asuran", genre: "Drama", watched: false },
  { id: 5, title: "Kaithi", genre: "Thriller", watched: true },
  { id: 6, title: "Soorarai Pottru", genre: "Biography", watched: true },
  { id: 7, title: "Thunivu", genre: "Action", watched: false },
  { id: 8, title: "Love Today", genre: "Romance", watched: true },
  { id: 9, title: "Doctor", genre: "Comedy", watched: false },
  { id: 10, title: "Don", genre: "Comedy", watched: true },
  { id: 11, title: "Ponniyin Selvan: I", genre: "Historical", watched: true },
  { id: 12, title: "Ponniyin Selvan: II", genre: "Historical", watched: false },
  { id: 13, title: "Vada Chennai", genre: "Crime", watched: false },
  { id: 14, title: "Jai Bhim", genre: "Courtroom Drama", watched: true },
  { id: 15, title: "Maanaadu", genre: "Sci-Fi", watched: true },
  { id: 16, title: "Teddy", genre: "Fantasy", watched: false },
  { id: 17, title: "Irudhi Suttru", genre: "Sports Drama", watched: true },
];

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const { children } = props;
  const [movies, setMovies] = useState(initialMovies);
  const [favorites, setFavorites] = useState([]);

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const toggleWatched = (id) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const toggleFavorite = (id) => {
    const movie = movies.find((m) => m.id === id);
    if (favorites.some((fav) => fav.id === id)) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== id));
    } else {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  return (
    <MovieContext.Provider
      value={{ movies, favorites, addMovie, deleteMovie, toggleWatched, toggleFavorite }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
