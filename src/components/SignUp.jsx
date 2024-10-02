import React, { useState } from 'react';
import './Login.css'; // Reuse the same CSS file

function SignUp({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email }; // Mock user for demonstration
    onLogin(user);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="login-input" // Reusing the same class
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input" // Reusing the same class
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input" // Reusing the same class
        />
        <button type="submit" className="login-button">Sign Up</button> {/* Reusing the same class */}
      </form>
    </div>
  );
}

export default SignUp;
