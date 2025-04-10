import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileCard from "./ProfileCard";

function Profile() {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles((prev) => [...prev, profile]);
  };
  const deleteProfile = () => {};
  const updateProfile = () => {};

  return (
    <>
      <h1>User Profiles</h1>
      <ProfileForm onAdd={addProfile} />
      {profiles.map((profile) => (
        <ProfileCard profile={profile} />
      ))}
    </>
  );
}

export default Profile;
