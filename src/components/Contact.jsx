import React from "react";
import data from "../data";

const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <h2>Contact</h2>
      <div className="contact-grid">
        <div className="contact-card glass">
          <h4>Get in touch</h4>
          <p><strong>Phone:</strong> <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
          <p><strong>Address:</strong> <span>{data.contact.address}</span></p>
        </div>
        <div className="contact-card glass">
          <h4>Quick message</h4>
          <form onSubmit={(e)=>e.preventDefault()} className="contact-form">
            <input type="text" placeholder="Your name" required/>
            <input type="email" placeholder="Email" required/>
            <textarea rows="4" placeholder="Message" required/>
            <button className="btn-primary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
