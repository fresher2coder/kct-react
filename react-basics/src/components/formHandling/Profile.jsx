import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileCard from "./ProfileCard";

import { v4 as generateId } from "uuid";

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);

  const addProfile = (newProfile) => {
    const isDuplicate = profiles.some(
      (profile) => profile.fullname === newProfile.fullname
    );

    if (isDuplicate) {
      alert(`Profile is already exist with the name: ${newProfile.fullname}`);
      return;
    }

    newProfile.id = generateId();
    setProfiles((prev) => [...prev, newProfile]);
  };

  const deleteProfile = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
    setIsEdit(false);
    setCurrentProfile(null);
  };

  const updateProfile = (id, updateProfile) => {
    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id == id ? { id, ...updateProfile } : profile
      )
    );

    setIsEdit(false);
    setCurrentProfile(null);
  };

  return (
    <>
      <h1>User Profiles</h1>
      <ProfileForm
        onAdd={addProfile}
        onUpdate={updateProfile}
        isEdit={isEdit}
        currentProfile={currentProfile}
      />
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onDelete={deleteProfile}
          onUpdate={(profile) => {
            setIsEdit(true);
            setCurrentProfile(profile);
          }}
        />
      ))}
    </>
  );
}

export default Profile;
