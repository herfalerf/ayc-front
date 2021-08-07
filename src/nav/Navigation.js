import React from "react";
import { Link, NavLink } from "react-router-dom";

// Navigation bar for site.  Shows up on every page
//
// When admin is logged in, shows admin related links
//
// Rendered by App
//

function Navigation() {
  function Nav() {
    return (
      <ul>
        <li>
          <NavLink to="/methods">Methodology</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav>
      <Link to="/">Align Your Culture</Link>
      <Nav></Nav>
    </nav>
  );
}

export default Navigation;
