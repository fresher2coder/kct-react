import React, { useEffect, useState } from "react";

function MouseTracker(props) {
  const { changeCoordinates } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mouse Tracker Runs in Mounting and Updating Phase");
  });

  const handleMouseMove = (event) => {
    changeCoordinates({ x: event.clientX, y: event.clientY });
  };

  // Mounting Phase - returns a function to unmount the component
  useEffect(() => {
    console.log("Mouse Tracker Mounted");

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("Mouse Tracker Unmounted");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Updating Phase - runs when count changes
  useEffect(() => {
    console.log("Mouse Tracker Counter is Updated: ", count);
  }, [count]);

  return (
    <>
      <h1>Mouse Tracker with Counter</h1>
      <button className="btns" onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>
    </>
  );
}

export default MouseTracker;
