import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state variable - hooks
  const [counterName, setCounterName] = useState("Counter"); // state variable - hooks

  const increment = () => {
    setCounterName(() => "Increment Counter"); // setCounterName is a function to update the state variable
    setCount((prevCount) => prevCount + 1); // setCount is a function to update the state variable
    console.log(count);
  };
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      increment();
      console.log(count);
    }
    setCounterName(() => "Increment Five Counte");
  };
  const decrement = () => {
    setCounterName(() => "Decrement Counter");
    setCount((prevCount) => prevCount - 1); // setCount is a function to update the state variable
    console.log(count);
  };
  return (
    <>
      <section className="container">
        <h1>
          {counterName}: {count}
        </h1>
        <div className="btns">
          <button className="btn" onClick={increment}>
            Increment
          </button>
          <button className="btn" onClick={decrement}>
            Decrement
          </button>
          <button className="btn" onClick={incrementFive}>
            Increment Five
          </button>
        </div>
      </section>
    </>
  );
}

export default Counter;
