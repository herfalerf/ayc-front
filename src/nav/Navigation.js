import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";

// Navigation bar for site.  Shows up on every page
//
// When admin is logged in, shows admin related links
//
// Rendered by App
//

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  const Nav = () => {
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
  };

  const AdminNav = () => {
    return (
      <div>
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
        <ul>
          <li>
            <NavLink to="/admin/home">Admin Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/team">Team Manager</NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <nav>
      <Link to="/">Align Your Culture</Link>
      {currentUser ? AdminNav() : Nav()}
    </nav>
  );
}

export default Navigation;
