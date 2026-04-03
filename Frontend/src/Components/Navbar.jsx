import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">AnimeZ</div>

      <div className="opt">
        {/* Links */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/top">Top Anime</a>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search anime..."
          className="search-bar"
        />

        {/* Button */}
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
