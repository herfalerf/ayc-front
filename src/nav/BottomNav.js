import React from "react";
import { Link, NavLink } from "react-router-dom";

// Bottom sitemap navigation.  Shows up on every page, contains links to social media as well as site links and link for admin access
//
// Rendered by App

const BottomNav = () => {
  return (
    <div>
      <div>
        <h1>AYC</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Libero at voluptate
          officiis sed atque, ipsam quod est dicta veritatis eaque aut, sequi
          sapiente veniam eveniet aliquid totam? Labore, hic! Laboriosam!
        </p>
      </div>
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

      <div>
        <span>1 800 123 4567 instagram email facebook linkedin</span>
      </div>
      <NavLink to="/admin">Admin</NavLink>
    </div>
  );
};

export default BottomNav;
