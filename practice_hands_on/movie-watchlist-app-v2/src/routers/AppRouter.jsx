import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import MovieStats from "../components/MovieStats";
import Favorites from "../pages/Favorites";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/stats" element={<MovieStats />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
