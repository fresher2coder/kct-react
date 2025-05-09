import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { postReducer } from "./PostReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      dispatch({ type: "SET_POSTS", payload: res.data });
    };
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
