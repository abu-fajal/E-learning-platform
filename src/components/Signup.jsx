import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [name, setName] = useState("");         
  const [email, setEmail] = useState("");       
  const [password, setPassword] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const contentType = res.headers.get("content-type");

      // Check if response is JSON
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();

        if (res.ok) {
          alert("Signup successful! Please login.");
          navigate("/login");
        } else {
          setErrorMsg(data.message || "Signup failed.");
        }
      } else {
        const text = await res.text(); // HTML or non-JSON
        setErrorMsg("Unexpected response from server.");
        console.error("Non-JSON response:", text);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setErrorMsg("Signup failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
    
    <div className="auth-container">
    
      <form onSubmit={handleSignup}>
        <h2>Create a student account</h2>
        
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>

        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Signup;
