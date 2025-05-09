import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import axios from "axios";

const PostItem = ({ post }) => {
  const { dispatch } = useContext(PostContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleDelete = async () => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
    dispatch({ type: "DELETE_POST", payload: post.id });
  };

  const handleUpdate = async () => {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      {
        id: post.id,
        title,
        body,
        userId: post.userId,
      }
    );

    dispatch({ type: "UPDATE_POST", payload: res.data });
    setIsEditing(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
      <div>
        <button onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button onClick={handleDelete} style={{ color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
