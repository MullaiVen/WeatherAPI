import React, { useState } from "react";
import "./forgotpassword.scss";

function ForgotPassword({ handleResetPassword }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the password reset logic here
    handleResetPassword(email);
  };

  return (
    <div className="forgot-password-container">
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="reset-btn">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
