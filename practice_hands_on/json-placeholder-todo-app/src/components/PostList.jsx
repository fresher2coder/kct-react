import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
