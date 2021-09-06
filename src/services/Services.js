import React from "react";
import ContactElement from "../contact/ContactElement";
import Workshops from "./Workshops";
import Assessments from "./Assessments";
import Consulting from "./Consulting";
import VideoList from "../videos/VideoList";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Icon,
} from "@material-ui/core";

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
    // backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    paddingTop: "6%",
    width: "100%",
    height: "100%",
  },
  headerItem: {
    // paddingLeft: theme.spacing(10),
  },
  subItem: { color: "white", padding: theme.spacing(4) },
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
    setService(Workshops);
  }
  function viewAssessments(evt) {
    setService(Assessments);
  }
  function viewConsulting(evt) {
    setService(Consulting);
  }

  return (
    <div>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="space-around"
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
        <Grid item xs={12} sm={6} md={4} className={classes.subItem}>
          <VideoList tag="services" />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.serviceBox}
      >
        <Grid
          container
          justifyContent="space-around"
          alignItems="space-around"
          item
          xs={12}
          sm={8}
          md={6}
        >
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              onClick={viewWorkshops}
            >
              Workshops
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              onClick={viewAssessments}
            >
              Culture Assessments
            </Button>
          </Grid>
          <Grid item>
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
          <Typography align="center">
            <div>{service}</div>
          </Typography>
        </Grid>
      </Grid>

      <ContactElement />
    </div>
  );
};

export default Services;
