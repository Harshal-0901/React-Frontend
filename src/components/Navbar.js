import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="top-navbar">
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-section">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faCommentDots} className="icon" />
        <div className="profile">
          <img src="profile-placeholder.jpg" alt="Profile" className="profile-pic" />
          <select className="profile-name" style={{ border: "none", fontWeight : "bold"}}>
            <option value="first" selected 
            >Admirra John</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
