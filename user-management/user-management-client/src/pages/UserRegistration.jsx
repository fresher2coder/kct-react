import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
    },
    address: {
      doorno: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pin: "",
    },
    credentials: {
      username: "",
      password: "",
    },
  });

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", formData);
      navigate("/login");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  ``;

  return (
    <div className="registration-container">
      <form className="registration-card" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <input
            type="text"
            placeholder="Name"
            value={formData.personal.name}
            onChange={(event) =>
              handleChange("personal", "name", event.target.value)
            }
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.personal.email}
            onChange={(e) => handleChange("personal", "email", e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.personal.phone}
            onChange={(e) => handleChange("personal", "phone", e.target.value)}
            required
          />
          <input
            type="date"
            value={formData.personal.dob}
            onChange={(e) => handleChange("personal", "dob", e.target.value)}
            required
          />
          <select
            value={formData.personal.gender}
            onChange={(e) => handleChange("personal", "gender", e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <input
            type="text"
            placeholder="Door No"
            value={formData.address.doorno}
            onChange={(e) => handleChange("address", "doorno", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Street"
            value={formData.address.street}
            onChange={(e) => handleChange("address", "street", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City"
            value={formData.address.city}
            onChange={(e) => handleChange("address", "city", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="State"
            value={formData.address.state}
            onChange={(e) => handleChange("address", "state", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Country"
            value={formData.address.country}
            onChange={(e) => handleChange("address", "country", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="PIN Code"
            value={formData.address.pin}
            onChange={(e) => handleChange("address", "pin", e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <legend>Credentials</legend>
          <input
            type="text"
            placeholder="Username"
            value={formData.credentials.username}
            onChange={(e) =>
              handleChange("credentials", "username", e.target.value)
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.credentials.password}
            onChange={(e) =>
              handleChange("credentials", "password", e.target.value)
            }
            required
          />
        </fieldset>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
