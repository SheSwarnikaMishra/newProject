import React, { useState } from 'react';

const UploadForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [resume, setResume] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation or data handling here
    // For this example, we'll just log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Contact No:', contactNo);
    console.log('Resume:', resume);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div>
        <label htmlFor="contactNo">Contact No:</label>
        <input
          type="tel"
          id="contactNo"
          value={contactNo}
          onChange={handleContactNoChange}
          required
        />
      </div>

      <div>
        <label htmlFor="resume">Resume:</label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadForm;