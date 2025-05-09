import React, { useState, useContext } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";

const PostForm = () => {
  const { dispatch } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      userId: 1,
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    dispatch({ type: "ADD_POST", payload: res.data });

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
