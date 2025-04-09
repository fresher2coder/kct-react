import React, { useState } from "react";

function MultiCounter() {
  const [counters, setCounters] = useState({ countA: 1, countB: 10 });

  const handleIncrementA = () => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      countA: prevCounters.countA + 1,
    }));
  };
  const handleIncrementB = () => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      countB: prevCounters.countB + 10,
    }));
  };
  const handleDecrementA = () => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      countA: prevCounters.countA - 1,
    }));
  };
  const handleDecrementB = () => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      countB: prevCounters.countB - 10,
    }));
  };

  return (
    <>
      <h1>Counters</h1>
      <h2>Count A: {counters.countA}</h2>
      <div className="btns">
        <button className="btn" onClick={handleIncrementA}>
          Increment A
        </button>
        <button className="btn" onClick={handleDecrementA}>
          Decrement A
        </button>
      </div>
      <h2>Count B: {counters.countB}</h2>
      <div className="btns">
        <button className="btn" onClick={handleIncrementB}>
          Increment B
        </button>
        <button className="btn" onClickCapture={handleDecrementB}>
          Decrement B
        </button>
      </div>
    </>
  );
}

export default MultiCounter;
