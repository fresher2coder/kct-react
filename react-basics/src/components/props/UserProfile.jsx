import React from "react";

function propsProfile(props) {
  //props are immutable
  console.log(props);

  //destructuring props
  const { name, age, email, address, phone } = props;
  return (
    <>
      <section className="card">
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{email}</p>
        <p>{address}</p>
        <p>{phone}</p>
      </section>
    </>
  );
}

export default propsProfile;
