import React, { useState } from "react";
import { useMovie } from "../context/MovieContext";

const AddMovieForm = () => {
  const { addMovie } = useMovie();
  const [formData, setFormData] = useState({ title: "", genre: "", year: "" });
  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const yearRegex = /^\d{4}$/;

  const validate = () => {
    const newErrors = {};
    if (!nameRegex.test(formData.title)) {
      newErrors.title = "Title must contain only letters and spaces.";
    }
    if (!yearRegex.test(formData.year)) {
      newErrors.year = "Year must be a 4-digit number.";
    }
    if (!formData.genre) {
      newErrors.genre = "Genre is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addMovie({ ...formData, watched: false, id: Date.now() });
      setFormData({ title: "", genre: "", year: "" });
    }
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add a Movie</h2>
      <input
        type="text"
        name="title"
        placeholder="Movie Title"
        value={formData.title}
        onChange={handleChange}
      />
      {errors.title && <p className="error">{errors.title}</p>}
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />
      {errors.genre && <p className="error">{errors.genre}</p>}
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
      />
      {errors.year && <p className="error">{errors.year}</p>}
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;