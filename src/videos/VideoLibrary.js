import React from "react";
import VideoList from "./VideoList";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Icon } from "@material-ui/core";
import ic_logomark from "../common/images/ic_logomark.svg";

// Video library
//
// Displays video list component
//
// Routed at /resources
//
// Routes -> VideoLibrary

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/resources/resources01.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    paddingTop: "4%",
    width: "100%",
    height: "100%",
  },
  headerItem: {
    padding: theme.spacing(3),
  },
  headerVideo: {
    padding: theme.spacing(3),
  },
  subItem: { color: "white", padding: theme.spacing(2) },
  textUnderline: { color: "white", borderBottom: "2px solid #00c7d7" },
  logoMark: { height: "14px", margin: "auto" },
  logoText: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#607494",
    margin: "2px",
  },
  videoBox: {
    backgroundColor: "rgb(244,245,248)",
    padding: theme.spacing(4),
  },
}));

function VideoLibrary() {
  console.debug("VideoLibrary");

  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        className={classes.upper}
      >
        <Grid item xs={12} sm={6} md={4} className={classes.headerItem}>
          <Typography className={classes.subItem} variant="h2">
            <span className={classes.textUnderline}>Get Started</span> with our
            Resource Library
          </Typography>
          <Typography
            className={classes.subItem}
            variant="subtitle1"
            component="p"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.headerVideo}>
          <VideoList tag="main" />
        </Grid>
      </Grid>
      <Grid container className={classes.videoBox}>
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
              Videos
            </Typography>
          </Typography>
        </Grid>
        <VideoList usename="true" usedescription="true" library="true" />
      </Grid>
    </div>
  );
}

export default VideoLibrary;
