import React from "react";

function ProfileCard(props) {
  const { profile, onDelete, onUpdate } = props;
  return (
    <>
      <div className="card">
        <h3>Profile Card</h3>
        {/* <p>{profile.id}</p> */}
        <p>{profile.fullname}</p>
        <p>{profile.age}</p>
        <p>{profile.occupation}</p>
        <div className="btns">
          <button className="btn" onClick={() => onUpdate(profile)}>
            Update Profile
          </button>
          <button
            className="btn"
            onClick={() => {
              onDelete(profile.id);
            }}
          >
            Delete Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
