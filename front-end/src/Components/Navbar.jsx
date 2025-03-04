import React from 'react';
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="portfolio" to="/">Portfolio</NavLink>
      <div className='links'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  to="/experience">Experience</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/image">Image</NavLink>
          </li>
      </div>
    </nav>
  );
};

export default Navbar;
