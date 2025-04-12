import React from "react";

import MovieList from "../components/MovieList";
import MovieForm from "./MovieForm";

const Home = () => (
  <div className="app-container">
    <h1 className="main-title">🎬 Movie Wishlist</h1>
    <MovieForm />
    <MovieList />
  </div>
);

export default Home;
