import React from "react";
import Child from "./Child";

function Parent() {
  const handleClick = (msg) => {
    console.log("Child Message:", msg);
  };
  return (
    <>
      <div className="container">
        <h1>Parent</h1>
        <Child onSend={handleClick} />
      </div>
    </>
  );
}

export default Parent;
