// Signup.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        fullname,
        email,
        password,
      });
      console.log(response.data);
      // If signup is successful, navigate to PromoPro
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
      <h2>Signup</h2>
      <label>Fullname: </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
      <br />
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
      <button onClick={handleSignup} className="sign">Signup</button>
      <button onClick={goBack} className="sign">Go Back</button>
    </div>
  );
};

export default Signup;
