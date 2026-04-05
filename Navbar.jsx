
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 className="logo">TAJ</h2>

      <ul className="nav-links">
        <li>DESTINATIONS</li>
        <li>HOTELS</li>
        <li>EXPERIENCES</li>
        <li>OFFERS</li>
        <li>MEMBERSHIPS</li>
      </ul>

      <div className="nav-buttons">
        <button
          className="login"
          onClick={() => navigate("/login")}
        >
          LOGIN / SIGN UP
        </button>

  <button 
  className="book"
  onClick={() => navigate("/booking")}
>
  BOOK A STAY
</button>
      </div>
    </div>
  );
};

export default Navbar;


