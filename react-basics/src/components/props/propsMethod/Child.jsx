import React from "react";

function Child(props) {
  const { onSend } = props;
  return (
    <>
      <h1>Child</h1>
      <div className="btns">
        <button
          className="btn"
          onClick={() => {
            onSend("Hi Dad!");
          }}
        >
          Send
        </button>
      </div>
    </>
  );
  h1;
}

export default Child;
