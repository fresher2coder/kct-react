import React from "react";
import PostForm from "./components/PostFom";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📬 Post Manager (CRUD App)</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default App;
