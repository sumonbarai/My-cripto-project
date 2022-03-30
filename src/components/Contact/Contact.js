import React from "react";
import { Outlet } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-area">
      <div className="container">
        <h2>Contact Us, Our Office Address Down Below</h2>
        <button type="button">Bd Address</button>
        <button type="button">Us Address</button>
      </div>
      <div className="contact-details">
        <Outlet />
      </div>
    </div>
  );
};

export default Contact;
