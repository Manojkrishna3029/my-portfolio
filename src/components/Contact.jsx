import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const contact = {
    name: "KANDREGULA MANOJ KRISHNA",
    email: "manojkrishna3029@gmail.com",
    phone: "7673912346",
    address: "10-1-40, Pilla Vari Street, Near Fish Market, Anakapalli, Vishakapatnam-531001",
    linkedin: "https://www.linkedin.com/in/manoj-krishna-77124233b/",
    github: "https://github.com/Manojkrishna3029",
  };

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6nxfhln", "template_tg9xobk", e.target, "nLmNLvUPpkzEoWvVh")
      .then(() => {
        setStatus("Message Sent Successfully!");
        e.target.reset();
      })
      .catch(() => setStatus("❌ Failed to send. Try again!"));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">📬 Get in Touch</h2>

        <div className="contact-grid">

          {/* Contact Info */}
          <div className="contact-card glass">
            <h3>Contact Information</h3>
            <p><FaPhoneAlt className="icon" /> <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
            <p><FaEnvelope className="icon" /> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p><FaMapMarkerAlt className="icon" /> {contact.address}</p>

            <div className="social-links">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Message Form */}
          <div className="contact-card glass">
            <h3>Send a Message</h3>
            <form onSubmit={sendMessage} className="contact-form">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="4" placeholder="Your Message" required />
              <button className="btn-primary" type="submit">Send Message</button>
            </form>

            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
