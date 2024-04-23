import React, { useState } from 'react';
import "./Contactform.css";

const Contactform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:team@minuszero.in?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder='Name'
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder='Email'
          required
        />
      </div>
      <div>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          placeholder='Message'
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contactform;