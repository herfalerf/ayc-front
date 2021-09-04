import React from "react";
import { NavLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Icon,
  Link,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CopyrightIcon from "@material-ui/icons/Copyright";

// Bottom sitemap navigation.  Shows up on every page, contains links to social media as well as site links and link for admin access
//
// Rendered by App

const useStyles = makeStyles((theme) => ({
  botNav: {
    marginTop: 0,
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/nav/nav.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    // height: "120vh",
    minHeight: "25vh",
  },
  h1: {
    marginTop: 0,
  },
  botLogoItem: {
    padding: theme.spacing(2),
  },
  botItem: {
    padding: theme.spacing(2),
  },

  botLogo: {
    maxHeight: 40,
  },
  textWhite: {
    color: "#FFFFFF",
  },
  textPrimary: {
    color: "#00c7d7",
  },
}));

const BottomNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.botNav}>
      <div>
        <Grid container>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            item
            xs={6}
            className={classes.botItem}
          >
            <Grid item xs={8} classname={classes.botItem}>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "/images/logos/Logo03b.png"}
                className={classes.botLogo}
              ></img>
              <Typography className={classes.textWhite}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
            </Grid>
            {/* <Grid item xs={6}></Grid> */}
          </Grid>
          <Grid item xs={2} className={classes.botItem}>
            <List>
              <ListItem>
                <ListItemText
                  className={classes.textPrimary}
                  primary="QUICK LINKS"
                ></ListItemText>
              </ListItem>
              <ListItem>
                <Link component={RouterLink} to="/">
                  <ListItemText className={classes.textWhite} primary="Home" />
                </Link>
              </ListItem>
              <ListItem>
                <Link component={RouterLink} to="/methods">
                  <ListItemText
                    className={classes.textWhite}
                    primary="Methodology"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link component={RouterLink} to="/about">
                  {" "}
                  <ListItemText
                    className={classes.textWhite}
                    primary="About Us"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link component={RouterLink} to="/contact">
                  {" "}
                  <ListItemText
                    className={classes.textWhite}
                    primary="Contact"
                  />
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2} className={classes.botItem}>
            <List>
              <ListItem className={classes.textPrimary}>
                <ListItemText primary="OUR SERVICES" />
              </ListItem>
              <ListItem>
                <Link component={RouterLink}>
                  {" "}
                  <ListItemText
                    className={classes.textWhite}
                    primary="Workshops"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link>
                  {" "}
                  <ListItemText
                    className={classes.textWhite}
                    primary="Culture Assessments"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link>
                  <ListItemText
                    className={classes.textWhite}
                    primary="Consulting"
                  />
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2} className={classes.botItem}>
            <List>
              <ListItem className={classes.textPrimary}>
                <ListItemText primary="RESOURCES" />
              </ListItem>
              <ListItem>
                <Link>
                  {" "}
                  <ListItemText
                    className={classes.textWhite}
                    primary="Video Library"
                  />
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid container>
            <Grid item xs={3} className={classes.botItem}>
              <Typography className={classes.textWhite}>
                <PhoneIcon />
                1-800-123-1234
              </Typography>
            </Grid>

            <Grid item xs={3} className={classes.botItem}>
              <Link component="a" href="mailto:test@email.com">
                <Typography className={classes.textWhite}>
                  <MailOutlineIcon />
                  test@email.com
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={1} className={classes.botItem}>
              <Link component="a" href="https://www.facebook.com">
                <FacebookIcon className={classes.textWhite} />
              </Link>
            </Grid>
            <Grid item xs={1} className={classes.botItem}>
              <Link componet="a" href="https://www.linkedin.com">
                <LinkedInIcon className={classes.textWhite} />
              </Link>
            </Grid>
            <Grid item xs={3} className={classes.botItem}>
              <Typography className={classes.textWhite}>
                <CopyrightIcon />
                2021 AYC. All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>

      {/* <NavLink to="/admin">Admin</NavLink> */}
    </div>
  );
};

export default BottomNav;
