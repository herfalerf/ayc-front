import React from "react";
import ContactElement from "../contact/ContactElement";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Icon } from "@material-ui/core";
import ic_methodology_inspire from "../common/images/ic_methodology_inspire.svg";
import ic_methodology_leadership from "../common/images/ic_methodology_leadership.svg";
import ic_methodology_motivate from "../common/images/ic_methodology_motivate.svg";
import ic_methodology_thriving from "../common/images/ic_methodology_thriving.svg";

// Methods page
//
// Rendered at /methods
//
// Routes -> Methods
//

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/methods/methods01.png')`,
    backgroundSize: "cover",

    backgroundPosition: "center bottom",
    paddingTop: "27%",
    width: "100%",
  },
  methodTitle: { backgroundColor: "#FFFFFF", padding: theme.spacing(3) },
  methodImg: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/methods/methodsinfographic.png')`,
    backgroundSize: "contain",
    backgroundColor: "#FFFFFF",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",

    paddingTop: "59%",
    height: "100%",
    width: "100%",
    minHeight: "300px",
    maxHeight: "50vh",
  },
  logo: {
    maxHeight: 40,
    margin: theme.spacing(2),
  },
  mainIcon: {
    height: 100,
  },
  whyBox: { padding: theme.spacing(4) },
  whyItem: { padding: theme.spacing(2) },
  thickText: {
    fontWeight: "bold",
  },
}));

const Methods = () => {
  console.debug("Methods");

  const classes = useStyles();

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid container className={classes.methodTitle}>
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
            Cultural Alignment Model
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio saepe
            alias explicabo dignissimos doloribus consequuntur et eum sit?
            Corrupti, excepturi!
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.methodImg}></Grid>
      <Grid container className={classes.whyBox}>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            className={classes.thickText}
            align="center"
          >
            WHY USE OUR METHODOLOGY?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            We Make It Easy to Tranform Your Company Culture
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          item
          xs={12}
        >
          <Grid container item lg={3} sm={6} className={classes.whyItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_methodology_motivate}
                    alt="motivate icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Motivate Your Team
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item lg={3} sm={6} className={classes.whyItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_methodology_thriving}
                    alt="motivate icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Create a Thriving Environment
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item lg={3} sm={6} className={classes.whyItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_methodology_leadership}
                    alt="motivate icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Establish Faith in Leadership
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item lg={3} sm={6} className={classes.whyItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_methodology_inspire}
                    alt="motivate icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Inspire Your Team for Greatness
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
      </Grid>
      <ContactElement />
    </div>
  );
};

export default Methods;
