import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3004/user/login", { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate("/homepage");
    } catch (error) {
      setError("Invalid email or password");
      console.error("Error logging in:", error);
    }
  };   

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
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
             placeholder='Please enter your password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="signup-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
