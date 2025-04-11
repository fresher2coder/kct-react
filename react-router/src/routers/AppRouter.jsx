import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Services from "../pages/Services";
import Service1 from "../components/Service1";
import Service2 from "../components/Service2";
import Service3 from "../components/Service3";
import ServicesOverview from "../components/ServicesOverview";
import UsersList from "../pages/UsersList";
import UserCard from "../components/UserCard";
import Booking from "../pages/Booking";
import Confirmation from "../pages/Confirmation";

function AppRouter() {
  return (
    <>
      <Router>
        <MainLayout name="main layout">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />}>
              <Route index element={<ServicesOverview />} />
              <Route path="service1" element={<Service1 />} />
              <Route path="service2" element={<Service2 />} />
              <Route path="service3" element={<Service3 />} />
            </Route>
            <Route path="/users" element={<UsersList />}>
              <Route path=":userId" element={<UserCard />} />
            </Route>

            <Route path="/booking" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default AppRouter;
