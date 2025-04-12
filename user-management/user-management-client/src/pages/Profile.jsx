import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import ProfileEditModal from "../components/ProfileEditModal";

Modal.setAppElement("#root");

const Profile = () => {
  const { state, logout, updateProfile, fetchUserProfile } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editSection, setEditSection] = useState(null);
  const [tempData, setTempData] = useState({});

  const formData = state.profile;

  useEffect(() => {
    if (state.username && !state.profile) {
      fetchUserProfile();
    }
  }, [state.username, state.profile, fetchUserProfile]);

  if (!formData) return <p>Loading profile...</p>;

  const openModal = (section) => {
    setEditSection(section);
    setTempData(formData[section] || {});
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updated = {
      ...formData,
      [editSection]: { ...tempData }, // ensure it's not linked to state
    };

    console.log("Sending updated profile:", updated);

    try {
      const response = await axios.put(
        `http://localhost:3000/users/${formData.id}`,
        updated
      );

      updateProfile(response.data);
      closeModal();
      alert("Profile updated successfully.");
    } catch (error) {
      console.error("Error updating profile:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
      alert("Failed to update profile.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${formData.id}`);
      logout();
      alert("Account deleted.");
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete account.");
    }
  };

  const { personal, address, credentials } = formData;

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>

      <div className="profile-card">
        <div className="profile-card-header">
          Personal Info
          <button className="edit-btn" onClick={() => openModal("personal")}>
            <FaEdit />
          </button>
        </div>
        <p>
          <strong>Name:</strong> {personal.name}
        </p>
        <p>
          <strong>Email:</strong> {personal.email}
        </p>
        <p>
          <strong>Phone:</strong> {personal.phone}
        </p>
        <p>
          <strong>DOB:</strong> {personal.dob}
        </p>
        <p>
          <strong>Gender:</strong> {personal.gender}
        </p>
      </div>

      <div className="profile-card">
        <div className="profile-card-header">
          Address
          <button className="edit-btn" onClick={() => openModal("address")}>
            <FaEdit />
          </button>
        </div>
        <p>
          {address.doorno}, {address.street}, {address.city}, {address.state},{" "}
          {address.country} - {address.pin}
        </p>
      </div>

      <div className="profile-card">
        <div className="profile-card-header">
          Credentials
          <button className="edit-btn" onClick={() => openModal("credentials")}>
            <FaEdit />
          </button>
        </div>
        <p>
          <strong>Username:</strong> {credentials.username}
        </p>
        <p>
          <strong>Password:</strong> {"*".repeat(credentials.password.length)}
        </p>
      </div>

      <button className="delete-btn" onClick={handleDelete}>
        <FaTrash /> Delete Account
      </button>

      <ProfileEditModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        section={editSection}
        tempData={tempData}
        setTempData={setTempData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Profile;
