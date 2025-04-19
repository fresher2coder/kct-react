import React from "react";
import { Routes, Route } from "react-router-dom";
import AddMovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import MovieStats from "../pages/Stats";
import Favorites from "../pages/Favorites";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<><AddMovieForm /><MovieList /></>} />
      <Route path="/stats" element={<MovieStats />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
