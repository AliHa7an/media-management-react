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
            <div>
            <span>Jane Cooper</span>
             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
             <a href="#">Change profile</a>
            </div>
            <img className="avatar" src={profile} alt="Profile" /> 
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
