import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  MenuItem,
  Button,
  IconButton,
  Link,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import navLogo from "./images/navLogo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "transparent",
      // backgroundColor: "#212931",
      boxShadow: "none",
      flexGrow: 1,
    },
    rootMobile: {
      background: "#607494",
      // boxShadow: "none",
      // flexgrow: 1,
    },
    navLogo: {
      maxHeight: 20,
      // flexGrow: 1,
    },
    mobileLogo: {
      maxHeight: 15,
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
    drawerContainer: {},
    drawer: {
      backgroundColor: "#607494",
    },
    drawerItem: {
      color: "#FFFFFF",
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
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <AppBar position="absolute" className={classes.root}>
        <Toolbar>
          <Button component={RouterLink} to="/" className={classes.navLogo}>
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
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <AppBar position="absolute" className={classes.rootMobile}>
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            // {...{
            //   anchor: "top",
            //   open: drawerOpen,
            //   onClose: handleDrawerClose,
            //   color: "secondary",
            // }}
            anchor="top"
            open={drawerOpen}
            onClose={handleDrawerClose}
            className={classes.drawerContainer}
          >
            <div className={classes.drawer}>
              <Link
                className={classes.drawerItem}
                component={RouterLink}
                to="/"
              >
                <MenuItem>Home</MenuItem>
              </Link>
              <Link
                className={classes.drawerItem}
                component={RouterLink}
                to="/methods"
              >
                <MenuItem>Our Methodology</MenuItem>
              </Link>
              <Link
                className={classes.drawerItem}
                component={RouterLink}
                to="/services"
              >
                <MenuItem>Services</MenuItem>
              </Link>
              <Link
                className={classes.drawerItem}
                component={RouterLink}
                to="/resources"
              >
                <MenuItem>Resources</MenuItem>
              </Link>
              <Link
                className={classes.drawerItem}
                component={RouterLink}
                to="/about"
              >
                <MenuItem>About us</MenuItem>
              </Link>
              <Link
                className={classes.drawerItem}
                component={RouterLink}
                to="/contact"
              >
                <MenuItem>About us</MenuItem>
              </Link>
            </div>
          </Drawer>
          <div>
            <img
              src={navLogo}
              alt="Align Your Culture"
              className={classes.mobileLogo}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  };

  const Nav = () => {
    return <div>{mobileView ? displayMobile() : displayDesktop()}</div>;
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
      {/* {currentUser ? AdminNav() : Nav()} */}
      {Nav()}
    </nav>
  );
}

export default Navigation;
