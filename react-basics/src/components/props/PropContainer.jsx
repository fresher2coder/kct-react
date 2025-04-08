import React from "react";

function PropContainer(props) {
  console.log(props);
  const { children, title } = props;
  return (
    <>
      <section className="card">
        <h1>{title}</h1>
        {children}
      </section>
    </>
  );
}

export default PropContainer;
