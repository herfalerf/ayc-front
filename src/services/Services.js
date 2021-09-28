import React from "react";
import ContactElement from "../contact/ContactElement";
import Workshops from "./Workshops";
import Assessments from "./Assessments";
import Consulting from "./Consulting";
import VideoList from "../videos/VideoList";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import ScrollToTopOnMount from "../common/ScrollToTopOnMount";

// Services
//
// Renders services page
//
// Routed at /services
//
// Routes -> services

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/services/services01.png')`,
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
  serviceBox: {
    padding: theme.spacing(2),
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/home/home02.png')`,
    backgroundSize: "cover",
    backgroundPosition: "right bottom",
  },
}));

const Services = ({ service, setService }) => {
  console.debug("Services");

  const classes = useStyles();

  function viewWorkshops(evt) {
    setService("workshops");
  }
  function viewAssessments(evt) {
    setService("assessments");
  }
  function viewConsulting(evt) {
    setService("consulting");
  }

  return (
    <div>
      <ScrollToTopOnMount />
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        className={classes.upper}
      >
        <Grid item xs={12} sm={6} md={4} className={classes.headerItem}>
          <Typography className={classes.subItem} variant="h2">
            <span className={classes.textUnderline}>Services</span> to Help You
            Transform Your Business
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
          <VideoList tag="services" />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.serviceBox}
      >
        <Grid container item xs={12} sm={8} md={6}>
          <Grid container justifyContent="center" item xs={12} sm={4}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={viewWorkshops}
            >
              Workshops
            </Button>
          </Grid>
          <Grid container justifyContent="center" item xs={12} sm={4}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={viewAssessments}
            >
              Culture Assessments
            </Button>
          </Grid>
          <Grid container justifyContent="center" item xs={12} sm={4}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={viewConsulting}
            >
              Consulting
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* <Typography align="center"> */}
          {service === "workshops" && <Workshops />}
          {service === "assessments" && <Assessments />}
          {service === "consulting" && <Consulting />}
          {/* </Typography> */}
        </Grid>
      </Grid>

      <ContactElement />
    </div>
  );
};

export default Services;
