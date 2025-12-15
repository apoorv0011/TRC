import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrentState] = useState("Login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (currState === "Sign Up") {
        const res = await axios.post("http://localhost:5000/api/auth/register", {
          name: form.name,
          email: form.email,
          password: form.password,
        });

        alert("Registered successfully! Please login now.");
        setCurrentState("Login");
        setForm({ name: "", email: "", password: "" });
        return;
      }

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: form.email,
        password: form.password,
      });

      const data = res.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role || "user");
      localStorage.setItem("name", data.name || "");

      setShowLogin(false);

      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-overlay" onClick={() => setShowLogin(false)}></div>
      
      <form className="login-popup-container" onSubmit={handleSubmit}>
        {/* Close Button */}
        <button 
          type="button"
          className="close-btn"
          onClick={() => setShowLogin(false)}
        >
          ×
        </button>

        {/* Header */}
        <div className="login-header">
          <h2>{currState === "Login" ? "Welcome Back" : "Create Account"}</h2>
          <p className="login-subtitle">
            {currState === "Login" 
              ? "Sign in to your account to continue" 
              : "Join us to discover unique handcrafted jewelry"}
          </p>
        </div>

        {/* Form Inputs */}
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <div className="input-group">
              <label>Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div className="input-group">
            <label>Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-btn">
          {currState === "Sign Up" ? "Create Account" : "Sign In"}
        </button>

        {/* Terms */}
        {currState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required id="terms" />
            <label htmlFor="terms">
              I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
            </label>
          </div>
        )}

        {/* Divider */}
        <div className="login-divider">
          <span>or</span>
        </div>

        {/* Switch State */}
        <div className="login-switch">
          {currState === "Login" ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>
                Sign up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>
                Sign in
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
