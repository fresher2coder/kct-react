import React, { useEffect, useState } from "react";

function ProfileForm(props) {
  const { onAdd, onUpdate, isEdit, currentProfile } = props;
  const [profile, setProfile] = useState({
    fullname: "",
    age: "",
    occupation: "",
  });

  useEffect(() => {
    if (isEdit) setProfile(currentProfile);
  }, []);

  const handleChange = (event) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit) onUpdate(currentProfile.id, profile);
    else onAdd(profile);

    setProfile({
      fullname: "",
      age: "",
      occupation: "",
    });
  };

  return (
    <>
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>{isEdit ? "Update Profile" : "Add Profile"}</h2>

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
        <button type="submit">{isEdit ? "Update" : "Add"}</button>
      </form>
    </>
  );
}

export default ProfileForm;
