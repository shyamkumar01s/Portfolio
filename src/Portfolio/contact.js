import React, { useState } from 'react';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <div className="container contact-content py-5">
        <h2 className="text-center mb-4">📬 Let's Connect</h2>

        {/* Social Links */}
        <div className="social-links-box mb-5">
  {/* LinkedIn */}
  <div className="social-box-item">
    <div className="social-text">
      <p><strong>🔗 LinkedIn</strong></p>
      <p>Connect with me professionally. I share my journey, projects, and achievements here.</p>
    </div>
    <a href="https://www.linkedin.com/in/shyam-kumar-40a74a319/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BaPUSZxt8TeWknkLJK3wXjA%3D%3D" target="_blank" rel="noopener noreferrer">
      <button className="visit-btn">Visit</button>
    </a>
  </div>



  {/* WhatsApp */}
  <div className="social-box-item">
    <div className="social-text">
      <p><strong>💬 WhatsApp</strong></p>
      <p>Have a question or opportunity? Feel free to ping me directly — I’m quick to respond.</p>
    </div>
    <a href="https://wa.me/916369086899" target="_blank" rel="noopener noreferrer">
      <button className="visit-btn">Visit</button>
    </a>
  </div>

  {/* Instagram */}
  <div className="social-box-item">
    <div className="social-text">
      <p><strong>📸 Instagram</strong></p>
      <p>Check out my lifestyle, fitness motivation, and creative side on Instagram.</p>
    </div>
    <a href="https://www.instagram.com/__mikeeyyy_._?igsh=MWR5MHJsbzl4bTNpaw==" target="_blank" rel="noopener noreferrer">
      <button className="visit-btn">Visit</button>
    </a>
  </div>
</div>



        {/* Contact Form */}

        <h2 style={{textAlign:"center" ,color:" #d1006f",fontWeight:"300"}}>🛠️ Fill this form to Contact Me</h2><br></br>
        <form className="contact-form" onSubmit={handleSubmit}>
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
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">📨 Submit</button>
        </form>

        {/* Display Submitted Info */}
        {submittedData && (
          <div className="submitted-info mt-4">
            <h5>Submitted Info:</h5>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;