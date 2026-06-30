import { useState } from 'react'
import "./Contect.css"

function Contect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    fetch("https://formsubmit.co/ajax/vickey333kr@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Portfolio Message from ${formData.name}`
      })
    })
      .then(response => {
        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
        }
      })
      .catch(error => {
        console.error("Error sending message:", error);
        setStatus('error');
      });
  };

  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="section-header">
          <h2 className="section-title">contact</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Say hello.</h3>
            <p className="info-subtitle">
              If you want to collaborate on a project, chat about full-stack engineering, or just ask a question, feel free to drop me a message.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="info-label">Email Me</h4>
                  <a href="mailto:vickey333kr@gmail.com" className="info-value">vickey333kr@gmail.com</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="info-label">Call Me</h4>
                  <a href="tel:7004308818" className="info-value">7004308818</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="info-label">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/vishwajeet-kumar-853b6b353/" target="_blank" rel="noopener noreferrer" className="info-value">vishwajeet-kumar</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="info-label">GitHub</h4>
                  <a href="https://github.com/vishwajeetkr504" target="_blank" rel="noopener noreferrer" className="info-value">vishwajeetkr504</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="info-label">Address</h4>
                  <span className="info-value" style={{ fontSize: '13px', lineHeight: '1.4' }}>A333 sector 4 sharma colony, Ranchi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
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
                  placeholder="Let's build something awesome..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className="loading-dots">Sending...</span>
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  'Send Message'
                )}
              </button>

              {status === 'success' && (
                <p className="form-status success">
                  Thank you! Your message has been sent successfully. I will get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="form-status error">
                  Oops! Something went wrong. Please try again or email me directly at vickey333kr@gmail.com.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contect

