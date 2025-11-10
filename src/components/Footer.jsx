import React from "react";
import data from "../data";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
