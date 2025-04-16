import React,{useState} from "react";
import Layout from "../Components/Layout/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form gönderildi:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <Layout>
<div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Contact us for your questions, suggestions, or feedback.
          </p>
        </div>

        <div className="contact-content">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you!</h3>
              <p>
                Your message has been sent successfully. We will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          )}

          <div className="contact-info">
            <h3>Other Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>info@ornek.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>+90 555 123 45 67</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>1234 Example Street, Istanbul, Turkey</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
