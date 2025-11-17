import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrentState] = useState("Login"); // "Login" or "Sign Up"
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
      // ------------------------------
      // SIGN UP
      // ------------------------------
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

      // ------------------------------
      // LOGIN
      // ------------------------------
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: form.email,
        password: form.password,
      });

      const data = res.data; // { token, role, name, email }

      // Store in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role || "user");
      localStorage.setItem("name", data.name || "");

      setShowLogin(false); // close popup

      // Redirect based on role
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
      <form className="login-popup-container" onSubmit={handleSubmit}>
        {/* TITLE + CLOSE BUTTON */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* FORM INPUTS */}
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              required
            />
          )}

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
          />

          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button className="login-btn">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* TERMS CHECKBOX */}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {/* SWITCH LINKS */}
        <p>
          Create a new account?
          <span
            onClick={() => setCurrentState("Sign Up")}
            style={{ cursor: "pointer", color: "#8c5a42", marginLeft: 5 }}
          >
            Click here
          </span>
        </p>

        <p>
          Already have an account?
          <span
            onClick={() => setCurrentState("Login")}
            style={{ cursor: "pointer", color: "#8c5a42", marginLeft: 5 }}
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
