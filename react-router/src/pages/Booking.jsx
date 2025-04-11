import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    destination: "",
    doj: "",
  });

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //redirect to confirmation page
    navigate("/confirmation", { state: formData });
  };

  return (
    <>
      <div className="container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
          />
          <input
            type="date"
            name="doj"
            placeholder="Date of Journey"
            value={formData.doj}
            onChange={handleChange}
          />

          <button type="submit">Book</button>
        </form>
      </div>
    </>
  );
}

export default Booking;
