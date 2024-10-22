import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate, useRoutes } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login details:", email, password);
  };

  const nav=useNavigate()  
  nav("/")
  return (
    <div className="loginContainer">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="inputField"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="inputField"
          required
        />
        <button type="submit" className="submitButton">Login</button>
        <p className="notAMember">
          Not a member? <Link to="/signup" onClick={handleLinkClick} className="signUpLink">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
