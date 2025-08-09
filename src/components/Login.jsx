import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Make sure this CSS includes hover/animations

const Login = () => {
  const [email, setEmail] = useState("");       
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Store token and redirect
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", data.user.email);
        alert("Login successful!");
        navigate("/UserDashboard"); // Redirect to user dashboard
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="wrapper">
    <div className="auth-container">
      
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Student Login</h2>
        
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

       
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary">
          Log In
        </button>

        <p>
          Don’t have an account?{" "}
          <a href="/signup" className="auth-link">
            Sign up
          </a>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Login;
