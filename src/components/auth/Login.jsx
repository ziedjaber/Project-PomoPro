// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(response.data);
      // If login is successful, navigate to PromoPro
      navigate('/PromoPro');
    } catch (error) {
      console.error(error);
    }
  };

  const goBack = () => {
    // Use navigate to go back to the previous page (Pomofocus component)
    navigate(-1);
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email: </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin} className="log">Login</button>
      <button onClick={goBack} className="log">Go Back</button>
    </div>
  );
};

export default Login;
