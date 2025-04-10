import React from "react";

function ProfileCard(props) {
  const { profile } = props;
  return (
    <>
      <div className="card">
        <h3>Profile Card</h3>
        <p>{profile.fullname}</p>
        <p>{profile.age}</p>
        <p>{profile.occupation}</p>
        <div className="btns">
          <button className="btn">Update Profile</button>
          <button className="btn">Delete Profile</button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
