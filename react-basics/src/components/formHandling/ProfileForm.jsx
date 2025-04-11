import React, { useEffect, useState } from "react";

function ProfileForm(props) {
  const { onAdd, onUpdate, isEdit, currentProfile } = props;
  const [profile, setProfile] = useState({
    fullname: "",
    age: "",
    occupation: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEdit) setProfile(currentProfile);
    else
      setProfile({
        fullname: "",
        age: "",
        occupation: "",
      });
  }, [isEdit]);

  const handleChange = (event) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = () => {
    const nameOccupationRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const ageRegex = /^\d+$/;

    const newErrors = {};

    if (profile.fullname.trim() === "")
      newErrors.fullname = "Fullname is required";

    if (profile.age.trim() === "") newErrors.age = "Age is required";

    if (profile.occupation.trim() === "") {
      newErrors.occupation = "Occupation is required";
      setErrors(newErrors);
      return Object.keys(newErrors).length == 0;
    }

    if (!nameOccupationRegex.test(profile.fullname))
      newErrors.fullname = "Fullname should contain only letters and spaces";
    if (!ageRegex.test(profile.age)) newErrors.age = "Age should be a number";
    if (!nameOccupationRegex.test(profile.occupation))
      newErrors.occupation =
        "Occupation should contain only letters and spaces";

    setErrors(newErrors);
    return Object.keys(newErrors).length == 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

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
        {errors.fullname && <span className="error">* {errors.fullname}</span>}
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={profile.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">* {errors.age}</span>}
        <input
          type="text"
          placeholder="Occupation"
          name="occupation"
          value={profile.occupation}
          onChange={handleChange}
        />
        {errors.occupation && (
          <span className="error">* {errors.occupation}</span>
        )}
        <button type="submit">{isEdit ? "Update" : "Add"}</button>
      </form>
    </>
  );
}

export default ProfileForm;
