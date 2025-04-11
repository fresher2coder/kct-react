import React, { useState } from "react";
import MovieList from "./components/MovieList.jsx";
import MovieStats from "./components/MovieStats";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="main-title fade-in">My Movie Watchlist</h1>

      <MovieStats />
      <MovieList />
    </div>
  );
};

export default App;
