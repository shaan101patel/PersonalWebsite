// Contact.js
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <ul>
        <li>
          Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
        </li>
        <li>Phone: (123) 456-7890</li>
        <li>
          LinkedIn:{' '}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            Your LinkedIn
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            Your GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
