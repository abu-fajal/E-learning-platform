// src/components/UserDashboard/Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('Abu fajal');
  const [email, setEmail] = useState('abu@example.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated!');
  };

  return (
    <div>
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
