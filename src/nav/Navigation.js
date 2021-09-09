import React, { useContext, useState } from "react";
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
      boxShadow: "none",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    rootMobile: {
      background: "#607494",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      boxShadow: "none",
      flexgrow: 1,
    },
    navLogo: {
      maxHeight: 20,
    },
    mobileLogo: {
      maxHeight: 13,
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
    drawerOpen: false,
    adminOpen: false,
  });

  const { drawerOpen, adminOpen } = state;

  const displayDesktop = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, adminOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, adminOpen: false }));
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
            {currentUser && (
              <div>
                <Button
                  className={classes.button}
                  onClick={handleDrawerOpen}
                  variant="contained"
                  color="secondary"
                >
                  Admin
                </Button>
                <Drawer
                  anchor="top"
                  open={adminOpen}
                  onClose={handleDrawerClose}
                  className={classes.drawerContainer}
                >
                  <div className={classes.drawer} onClick={handleDrawerClose}>
                    <Link
                      className={classes.drawerItem}
                      component={RouterLink}
                      to="/admin/team"
                    >
                      <MenuItem>Team Manager</MenuItem>
                    </Link>
                    <Link
                      className={classes.drawerItem}
                      component={RouterLink}
                      to="/admin/customers"
                    >
                      <MenuItem>Customers</MenuItem>
                    </Link>
                    <Link
                      className={classes.drawerItem}
                      component={RouterLink}
                      to="/admin/videos"
                    >
                      <MenuItem>Video Manager</MenuItem>
                    </Link>
                    <Link
                      className={classes.drawerItem}
                      component={RouterLink}
                      to="/"
                      onClick={logout}
                    >
                      <MenuItem>Log Out</MenuItem>
                    </Link>
                  </div>
                </Drawer>{" "}
              </div>
            )}
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
              Contact
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
    const handleAdminOpen = () =>
      setState((prevState) => ({ ...prevState, adminOpen: true }));
    const handleAdminClose = () =>
      setState((prevState) => ({ ...prevState, adminOpen: false }));

    return (
      <AppBar position="absolute" className={classes.rootMobile}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>

          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={handleDrawerClose}
            className={classes.drawerContainer}
          >
            <div className={classes.drawer} onClick={handleDrawerClose}>
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
                <MenuItem>Contact</MenuItem>
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
          {currentUser && (
            <div>
              <Button
                className={classes.button}
                onClick={handleAdminOpen}
                variant="contained"
                color="secondary"
              >
                Admin
              </Button>
              <Drawer
                anchor="top"
                open={adminOpen}
                onClose={handleAdminClose}
                className={classes.drawerContainer}
              >
                <div className={classes.drawer} onClick={handleAdminClose}>
                  <Link
                    className={classes.drawerItem}
                    component={RouterLink}
                    to="/admin/team"
                  >
                    <MenuItem>Team Manager</MenuItem>
                  </Link>
                  <Link
                    className={classes.drawerItem}
                    component={RouterLink}
                    to="/admin/customers"
                  >
                    <MenuItem>Customers</MenuItem>
                  </Link>
                  <Link
                    className={classes.drawerItem}
                    component={RouterLink}
                    to="/admin/videos"
                  >
                    <MenuItem>Video Manager</MenuItem>
                  </Link>
                  <Link
                    className={classes.drawerItem}
                    component={RouterLink}
                    to="/"
                    onClick={logout}
                  >
                    <MenuItem>Log Out</MenuItem>
                  </Link>
                </div>
              </Drawer>{" "}
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
  };

  const Nav = () => {
    return (
      <div>
        {displayDesktop()}
        {displayMobile()}
      </div>
    );
  };

  return <nav>{Nav()}</nav>;
}

export default Navigation;
