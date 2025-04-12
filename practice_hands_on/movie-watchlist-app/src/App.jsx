import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import MovieStats from "./components/MovieStats"; 
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import "./App.css";
// import "./components/MovieStats.css";

const App = () => {
  return (
    <Router>
      <div className="main-layout">
        <NavBar />
        <div className="content-area">
          <h1 className="main-title">My Movie Watchlist</h1>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/add-movies" element={<AddMovieForm />} />
            <Route path="/stats" element={<MovieStats />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
