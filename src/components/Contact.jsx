import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trimStart(), // Prevents leading spaces
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log("Form Data:", formData);
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="main-text scroll-scale">
        <span>Ask Me a Question</span>
        <h2>Contact Me</h2>
      </div>
      <form onSubmit={handleSubmit} className="scroll-bottom">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10,15}" // Restricts phone numbers
          title="Enter a valid phone number (10-15 digits)"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="btn-box formBtn">
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
