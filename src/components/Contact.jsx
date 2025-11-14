import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contact = {
    name: "KANDREGULA MANOJ KRISHNA",
    email: "manojkrishna3029@gmail.com",
    phone: "7673912346",
    address: "10-1-40, Pilla Vari Street, Near Fish Market, Anakapalli, Vishakapatnam-531001",
    linkedin: "#", // 👉 placeholder — add your LinkedIn URL here
    github: "#",   // 👉 placeholder — add your GitHub URL here
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">📬 Get in Touch</h2>

        <div className="contact-grid">
          {/* Left Card - Contact Info */}
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

          {/* Right Card - Message Form */}
          <div className="contact-card glass">
            <h3>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="4" placeholder="Your Message" required></textarea>
              <button className="btn-primary" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
