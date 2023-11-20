import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <footer className="footer">
          <button className="back-btn">Back</button>
          <button className="next-btn">Next  {'>>'}</button>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
