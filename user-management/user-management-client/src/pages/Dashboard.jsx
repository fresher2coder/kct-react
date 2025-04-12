import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { state, fetchUserProfile } = useAuth();

  console.log(state);

  useEffect(() => {
    if (state.username && !state.profile) {
      fetchUserProfile();
    }
  }, [state.username, state.profile, fetchUserProfile]);

  if (!state.username) {
    return <div className="dashboard-container">You are not logged in.</div>;
  }

  if (!state.profile) {
    return <div className="dashboard-container">Loading user details...</div>;
  }

  const { name } = state.profile.personal;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome, {name || "User"}!</h1>
      <p>Here are the features available for you:</p>
      <ul className="dashboard-features">
        <li className="feature-card">
          <h3>Edit Profile</h3>
        </li>
        <li className="feature-card">
          <h3>Manage Account</h3>
        </li>
        <li className="feature-card">
          <h3>View Activity</h3>
        </li>
        <li className="feature-card">
          <h3>Change Password</h3>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
