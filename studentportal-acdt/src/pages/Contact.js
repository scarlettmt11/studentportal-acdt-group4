// created by Dhruti Rathod 9018785

import { useState } from "react";
import "../css/App.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setSuccess("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <main className="page-content">

      {/* Keep your existing section */}
      <h2>Student Resources</h2>

      <div className="card-container">
        <div className="card">
          <h3>Study Planning</h3>
          <p>Organize assignments, deadlines, and course work more effectively.</p>
        </div>

        <div className="card">
          <h3>Learning Tools</h3>
          <p>Explore digital tools that support learning and productivity.</p>
        </div>

        <div className="card">
          <h3>Career Preparation</h3>
          <p>Build confidence with resume and interview preparation ideas.</p>
        </div>
      </div>

      {/* NEW CONTACT FORM SECTION */}
      <section className="contact-section">
        <h2>Contact Us</h2>

        {success && <p className="success">{success}</p>}

        <form className="contact-form" onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
          ></textarea>

          <button type="submit">Send Message</button>

        </form>
      </section>

    </main>
  );
}

export default Contact;