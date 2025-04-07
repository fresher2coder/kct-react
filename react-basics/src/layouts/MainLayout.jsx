import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Main from "../components/Main";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="main-content">
        <LeftSideBar />
        <Main />
        <RightSideBar />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
