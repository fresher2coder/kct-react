import React from "react";
import Modal from "react-modal";
import { FaTrash } from "react-icons/fa";

Modal.setAppElement("#root");

const ProfileEditModal = ({
  isOpen,
  closeModal,
  section,
  tempData,
  setTempData,
  handleSubmit,
}) => {
  const handleChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
  };

  const renderInputs = () => {
    return Object.keys(tempData).map((key) => (
      <div className="input-group" key={key}>
        <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
        <input
          type={key === "password" ? "password" : "text"}
          name={key}
          value={tempData[key] || ""}
          onChange={handleChange}
        />
      </div>
    ));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>Edit {section}</h2>
        <form onSubmit={handleSubmit}>
          {renderInputs()}
          <button className="btn primary" type="submit">
            Save
          </button>
          <button className="btn secondary" type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ProfileEditModal;
