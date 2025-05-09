import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PostProvider } from "./context/PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <PostProvider>
    <App />
  </PostProvider>
);
