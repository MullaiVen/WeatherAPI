import React from "react";
import linkedinLogo from "/assets/linkedin.svg";
import githubLogo from "/assets/github.svg";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="left-section">
        <p className="by">
          Made by{" "}
          <a
            className="port"
            href="https://mullai-portfolio.vercel.app/"
            target="_blank"
          >
            Mullai
          </a>
        </p>
      </div>
      <div className="right-section">
        <p className="qrs">Queries - </p>
        <a
          className="port"
          href="https://linkedin.com/in/mullai-vendhan333"
          target="_blank"
        >
          <img className="social-icon" src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a className="port" href="https://github.com/MullaiVen" target="_blank">
          <img className="social-icon" src={githubLogo} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
