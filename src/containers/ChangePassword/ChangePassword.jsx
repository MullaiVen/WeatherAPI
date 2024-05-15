import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.scss";

function ChangePassword() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    try {
      // Replace '/api/change-password' with your actual API endpoint
      const response = await axios.post("/api/change-password", passwords);
      // Handle response here, e.g., show success message, redirect, etc.
      navigate("/EnterOTP");
    } catch (error) {
      console.error("Error changing password:", error);
      // Handle errors, such as showing an error message to the user
    }
  };

  return (
    <div className="change-password-container">
      <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onSubmit={handleSubmit} className="change-btn">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
