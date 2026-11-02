
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import photo from '../../assets/download.png'

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login behavior until the backend is connected
    alert("Login form submitted successfully!");
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <Link to="/home" className="login-logo">
       
          <img src={photo} alt="" />
        </Link>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />

          <button type="submit" className="login-submit">
            Login
          </button>
        </form>

        <Link to="/forgot-password" className="forgot-password">
          Forgot Password
        </Link>

        <p className="register-text">Don't have any account?</p>

        <button
          type="button"
          className="register-button"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </section>
  );
}

export default Login;
