import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import navLogo from "./images/navLogo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "transparent",
      // backgroundColor: "#212931",
      boxShadow: "none",
      flexGrow: 1,
    },
    navLogo: {
      maxHeight: 20,
      // flexGrow: 1,
    },
    navLinks: {
      display: "flex",
      marginLeft: "auto",
      marginRight: 0,
    },
    navLink: {
      margin: "10px 10px 10px 10px",
      textDecoration: "none",
      borderBottom: "2px solid rgba(0, 0, 0, 0.0)",
      padding: "5px",
      color: "white",
    },
    active: {
      margin: "10px 10px 10px 10px",
      borderBottom: "2px solid #00c7d7",
      // paddingBottom: "2px",
      // textDecoration: "underline",
      // textDecorationColor: "#00c7d7",
      // textDecorationThickness: "2px",
    },
    button: {
      margin: "10px 10px 10px 10px",
    },
  })
);

// Navigation bar for site.  Shows up on every page
//
// When admin is logged in, shows admin related links
//
// Rendered by App
//

function Navigation({ logout }) {
  const classes = useStyles();
  const { currentUser } = useContext(UserContext);
  const Nav = () => {
    return (
      <div>
        <AppBar position="absolute" className={classes.root}>
          <Toolbar>
            <Button component={Link} to="/" className={classes.navLogo}>
              {" "}
              <img
                src={navLogo}
                alt="Align Your Culture"
                className={classes.navLogo}
              />
            </Button>
            <div className={classes.navLinks}>
              <Typography
                className={classes.navLink}
                component={NavLink}
                to="/methods"
                activeClassName={classes.active}
              >
                Our Methodology
              </Typography>
              <Typography
                className={classes.navLink}
                component={NavLink}
                to="/services"
                activeClassName={classes.active}
              >
                Services
              </Typography>
              <Typography
                className={classes.navLink}
                component={NavLink}
                to="/resources"
                activeClassName={classes.active}
              >
                Resources
              </Typography>
              <Typography
                className={classes.navLink}
                component={NavLink}
                to="/about"
                activeClassName={classes.active}
              >
                About Us
              </Typography>
              <Button
                className={classes.button}
                component={NavLink}
                to="/contact"
                variant="contained"
                color="secondary"
              >
                Contact Us
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
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
          <li>
            <NavLink to="/admin/customers">Customers</NavLink>
          </li>
          <li>
            <NavLink to="/admin/videos">Video Manager</NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>
              Log out
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <nav>
      {/* <Link to="/">Align Your Culture</Link> */}
      {currentUser ? AdminNav() : Nav()}
    </nav>
  );
}

export default Navigation;
