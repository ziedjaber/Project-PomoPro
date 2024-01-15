import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = ({ onLoginClick, onSignupClick, scrollToRefs }) => {
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <h1><Link to="/">PromoPro</Link></h1>
      <ul className="nav-links">
        <li className="link"><Link to="/#promodoro-timer">Promodoro-Timer</Link></li>
        <li className="link"><Link to="/#task-manager">Task-Manager</Link></li>
        <li className="link"><Link to="/#speech-to-text">Speech-To-Text</Link></li>
        <li className="link"><Link to="/#music-player">Music-Player</Link></li>
      
      </ul>
      <div className="icons">
        <i className="fas fa-chart-pie"></i>
        <i className="fas fa-cog"></i>
        <button className="login" id="nav" onClick={onLoginClick}>
          Login
        </button>
        <button className="signup" id="nav" onClick={onSignupClick}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
