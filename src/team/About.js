import React from "react";
import ContactElement from "../contact/ContactElement";
import TeamList from "./TeamList";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Icon } from "@material-ui/core";
import ic_logomark from "../common/images/ic_logomark.svg";
import ic_about_curiosity from "../common/images/ic_about_curiosity.svg";
import ic_about_positivity from "../common/images/ic_about_positivity.svg";
import ic_about_sharing from "../common/images/ic_about_sharing.svg";
import ic_about_simplicity from "../common/images/ic_about_simplicity.svg";
import ScrollToTopOnMount from "../common/ScrollToTopOnMount";

// Show page with list of team members
//
// On Mount, loads team members from API.
//
// This is routed at /team
//
// Routes -> { TeamCard }
//

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/about/about01.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    paddingTop: "27%",
    width: "100%",
    height: "100%",
  },
  logo: {
    maxHeight: 40,
    margin: theme.spacing(2),
  },
  mainIcon: {
    height: 100,
  },
  aboutBox: {
    padding: theme.spacing(4),
  },
  aboutItem: {
    padding: theme.spacing(2),
  },

  teamBox: {
    backgroundColor: "rgb(244,245,248)",
    padding: theme.spacing(4),
  },
  teamMember: {
    padding: theme.spacing(2),
  },
  logoMark: { height: "14px", margin: "auto" },
  logoText: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#607494",
    margin: "2px",
  },
}));

function About() {
  console.debug("TeamList");

  const classes = useStyles();

  return (
    <div>
      <ScrollToTopOnMount />
      <div className={classes.upper}></div>
      <Grid container justifyContent="center" className={classes.aboutBox}>
        <Grid item xs={12}>
          <Typography align="center">
            <img
              src={process.env.PUBLIC_URL + "/images/logos/Logo03a.png"}
              alt="AYC Logo"
              className={classes.logo}
            ></img>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Forging Our Own Path
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="subtitle1" align="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Libero at
            voluptate officiis sed atque, ipsam quod est dicta veritatis eaque
            aut, sequi sapiente veniam eveniet aliquid totam? Labore, hic!
            Laboriosam!
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.aboutBox}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid container item lg={3} sm={6} className={classes.aboutItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_about_sharing}
                    alt="sharing icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Sharing knowledge
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item lg={3} sm={6} className={classes.aboutItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_about_curiosity}
                    alt="curiosity icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Curiosity
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item lg={3} sm={6} className={classes.aboutItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_about_simplicity}
                    alt="simplicity icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Simplicity
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item lg={3} sm={6} className={classes.aboutItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_about_positivity}
                    alt="positivity icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Positivity
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container className={classes.teamBox}>
          <Grid container item xs={12} justifyContent="center">
            <Typography>
              <Icon className={classes.logoMark}>
                <img
                  src={ic_logomark}
                  alt="logo mark"
                  className={classes.logoMark}
                />
              </Icon>
              <Typography
                variant="subtitle1"
                className={classes.logoText}
                component="span"
              >
                WHO WE ARE
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center">
              The Team Behind AlignYourCulture
            </Typography>
          </Grid>
          <TeamList />
        </Grid>
      </div>
      <ContactElement />
    </div>
  );
}

export default About;
