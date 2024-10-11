// Navbar.js (Profile dropdown example)
import React, { useState } from "react";
import './Navbar.css';  // Assuming some styles for dropdown

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="navbar">
      <div 
        className="profile-icon" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <img src="/path-to-profile-pic.jpg" alt="Profile" className="profile-pic" />
        
        {isHovered && (
          <div className="profile-dropdown">
            <p>My Account</p>
            <p>Orders</p>
            <p>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
