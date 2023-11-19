import React from "react";
import "./style.css";
import profile from "./images/profile.jpg"; // Import the image

const Header = () => {
  return (
    <div className="header-area">
      <div className="container">
        <header className="header">
          <div className="left-head">
            <span>Media Management</span>
            <span>Draft Campaign</span>
          </div>

          <div className="right-head">
            <span>Jane Cooper</span>
            <img src={profile} alt="Profile" /> {/* Use the imported image */}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
