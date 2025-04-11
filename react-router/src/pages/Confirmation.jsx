import React from "react";
import { useLocation } from "react-router-dom";

function Confirmation() {
  //{ state: formData }
  const location = useLocation();
  const { fullName, destination, doj } = location.state || {};
  return (
    <>
      <h1>Hi! {fullName}!</h1>
      <h3>
        Your booking to {destination} is confirmed on {doj}
      </h3>
    </>
  );
}

export default Confirmation;
