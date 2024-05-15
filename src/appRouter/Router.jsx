import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../app/App.jsx";
import Login from "../containers/Login/login.jsx";
import SignupPage from "../containers/Signup/signup.jsx";
import ForgotPassword from "../containers/ForgotPassword/forgotpassword.jsx";
import EnterOTP from "../containers/EnterOTP/EnterOTP.jsx";
import ChangePassword from "../containers/ChangePassword/ChangePassword.jsx";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/EnterOTP" element={<EnterOTP />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
    </Routes>
  </Router>
);

export default AppRouter;
