// Navbar.js
import React from "react";
import './Navbar.css'

const Navbar = ({ user, onLogin, onLogout }) => {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <img src="User-Profile.png" alt="Dashboard Logo" id="dashboard-logo" />
        <div id="username">
          <strong>TCS Intelligent Service Desk</strong>
        </div>
      </div>

      <div className="navbar-right">
        {user ? (
          <div>
            <span>Logged in as: {user.name}</span>
            <button onClick={onLogout} className="sign-out-btn" id='button'>
              Sign Out
            </button>
          </div>
        ) : (
          <div id='login-btn'>
            <a>
              <button id='button' onClick={onLogin}>Log
                In</button>
            </a>
          </div>

        )}
      </div>
      

    </div>
    
  );
};

export default Navbar;