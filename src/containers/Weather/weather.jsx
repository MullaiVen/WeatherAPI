import React, { useState } from "react";
import "./weather.scss";
import user from "/assets/user.png";
import logo from "/assets/storm.svg";
import Sbtn from "/assets/Sbtn.png";

function Weather({ setLocation }) {
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = () => {
    setLocation(input);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="Sbar">
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="Weather-Map" />
        </a>
      </div>
      <div className="searchbar">
        <input
          className="Sinput"
          type="text"
          placeholder="Search your city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img className="Sbtn" src={Sbtn} alt="Search" />
        </button>
      </div>
      <div className="nav-user" onClick={toggleDropdown}>
        <img src={user} alt="You!!" />
        {showDropdown && (
          <div className="dropdown-menu">
            {/* Dropdown menu items */}
            <a href="/profile">Profile</a>
            <a href="/SignupPage">Settings</a>
            <a href="/logout">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
