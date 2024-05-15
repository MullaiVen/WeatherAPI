import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./EnterOTP.scss";

function EnterOTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Assuming email is passed via state

  useEffect(() => {
    // Auto-focus on OTP input if needed or perform other side effects
  }, []);

  const handleInputChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/verify-otp", { email, otp });
      // Handle response and navigate to the next page
      navigate("/next-page");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle errors, such as showing a message to the user
    }
  };

  return (
    <div className="otp-container">
      <h3>Enter OTP</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleInputChange}
          maxLength={6}
          placeholder="Enter your OTP"
          autoFocus
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default EnterOTP;
