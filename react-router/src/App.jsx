import React from "react";
import MainLayout from "./layouts/MainLayout";
import AppRouter from "./routers/AppRouter";

import "./App.css";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </>
  );
}

export default App;
