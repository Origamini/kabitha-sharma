import React from 'react';
import './Navbar.css';
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // define colors for each route
  const colors = {
    '/': "rgba(60, 110, 63, 0.46)",
    '/about': "rgba(110, 60, 72, 0.46)",
    '/experience': "rgba(107, 110, 60, 0.46)",
    '/skills': "rgba(60, 60, 60, 0.46)",
  };

  // get the current color based on current path (default will be white)
  const currentColor = colors[location.pathname] || "white";

  return (
      <div className='links' style={{background: currentColor}}>
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
            <NavLink to="/skills">Skills</NavLink>
          </li>
      </div>
  );
};

export default Navbar;
