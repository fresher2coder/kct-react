import React, { useState } from "react";
import MouseTracker from "./MouseTracker";

function MouseTrackerApp() {
  //state = { x: 0, y: 0 };
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [showTracker, setShowTracker] = useState(true);

  return (
    <>
      <div className="container">
        <h1>Mouse Tracker App</h1>

        <h2>Coordinates: {`X: ${coordinates.x}, Y: ${coordinates.y}`}</h2>

        <div className="btns">
          <button className="btn" onClick={() => setShowTracker(!showTracker)}>
            {showTracker ? "Remove Tracker" : "Show Tracker"}
          </button>
        </div>

        {showTracker && <MouseTracker changeCoordinates={setCoordinates} />}
      </div>
    </>
  );
}

export default MouseTrackerApp;
