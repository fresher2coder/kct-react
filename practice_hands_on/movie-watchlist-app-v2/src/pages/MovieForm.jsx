import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { v4 as uuidv4 } from "uuid";

const MovieForm = () => {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const yearRegex = /^\d{4}$/;

    if (!nameRegex.test(title) || !yearRegex.test(year)) {
      alert("Please enter a valid movie title and 4-digit year");
      return;
    }

    const newMovie = {
      id: uuidv4(),
      title,
      genre,
      year,
      watched: false,
    };

    addMovie(newMovie);
    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
