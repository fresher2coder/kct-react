import React, { useState } from "react";

function ProfileForm(props) {
  const { onAdd } = props;
  const [profile, setProfile] = useState({
    fullname: "",
    age: "",
    occupation: "",
  });

  const handleChange = (event) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(profile);

    setProfile({
      fullname: "",
      age: "",
      occupation: "",
    });
  };

  return (
    <>
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Profile Form</h2>

        <input
          type="text"
          placeholder="Full Name"
          name="fullname"
          value={profile.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={profile.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Occupation"
          name="occupation"
          value={profile.occupation}
          onChange={handleChange}
        />
        <button type="submit">Add Profile</button>
      </form>
    </>
  );
}

export default ProfileForm;
