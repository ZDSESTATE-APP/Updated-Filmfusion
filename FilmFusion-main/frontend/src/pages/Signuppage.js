import React, { useState } from "react";
import axios from "axios";
import "../styles/Signuppage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3004/user/create", { email, username, password, address });
      // successful signup
      window.location.href = "/login";
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign up here:</h2>
      <p>Please enter your email and password:</p>
      <form onSubmit={handleSubmit} className="form-styling">
        <label>
          Email:
          <input
            className="input-styling"
               placeholder='Please enter your email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            className="input-styling"
            placeholder="Please enter your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Username:
          <input
            className="input-styling"
            placeholder="Please enter your Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            className="input-styling"
               placeholder='Please enter your Address'
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <button className="signup-btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
