import React from "react";
import MainLayout from "./layouts/MainLayout";
import UserProfile from "./components/props/UserProfile";

import "./App.css";
import PropContainer from "./components/props/PropContainer";
import Parent from "./components/props/propsMethod/Parent";
import Counter from "./components/state/Counter";

function App() {
  // let age = 23;
  // let message = `I am ${age} years old`;
  return (
    <>
      {/* layout */}
      {/* <MainLayout /> */}

      {/* props */}
      <section className="profile-card">
        <UserProfile
          name="Dineshkumar"
          age={34}
          email="dk@gmail.com"
          address="Chennai"
          phone={9685747458}
        />

        <UserProfile
          name="Divya Dineshkumar"
          age={31}
          email="dd@gmail.com"
          address="Chennai"
          phone={9685747458}
        />
      </section>

      {/* childern as props */}
      <section className="profile-card">
        <PropContainer title="Dashboard">
          <h2>Welcome to the E-Learning!</h2>
        </PropContainer>
        <PropContainer title="Settings">
          <h2>Change your settings here!</h2>
        </PropContainer>
      </section>

      {/* method as props */}
      <Parent />

      {/* state  */}
      <Counter />
    </>
  );
}

export default App;
