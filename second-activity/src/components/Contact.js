import "../components/Contact.css";
import React from "react";

function Contact() {
  return (
    <section className="contact">
      <form>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            required
          ></input>
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email address"
            required
          ></input>
        </div>

        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name=""
            id=""
            className="field message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
