import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import CardButton from "../common/CardButton";
import ContactForm from "../contact/ContactForm";
import VideoList from "../videos/VideoList";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Icon,
} from "@material-ui/core";
import ic_logomark from "../common/images/ic_logomark.svg";
import ic_service_workshops from "../common/images/ic_services_workshops.svg";
import ic_service_assessment from "../common/images/ic_services_assessment.svg";
import ic_service_consulting from "../common/images/ic_services_consulting.svg";

// Homepage of site.
//
// Routed at /
//
// Routes -> Homepage
//

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mission: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/home/home01.png')`,
    backgroundSize: "cover",
    backgroundPosition: "right bottom",
    height: "100vh",
  },
  whatWeDo: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/home/home02.png')`,
    backgroundSize: "cover",
    backgroundPosition: "right bottom",
    minHeight: "50vh",
  },
  services: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/home/home03.png')`,
    backgroundSize: "cover",
    backgroundPosition: "right top",
    height: "75vh",
  },
  contact: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/contact/contactlink.png')`,
    backgroundSize: "cover",
    backgroundPosition: "right bottom",
  },
  missionItem: { padding: theme.spacing(2) },
  whatWeDoItem: { padding: theme.spacing(2) },
  servicesItem: { padding: theme.spacing(2) },
  contactItem: { padding: theme.spacing(2) },
  mainItem: { padding: theme.spacing(2) },
  subItem: { color: "white", padding: theme.spacing(2) },
  cardButton: { marginTop: theme.spacing(2), marginRight: theme.spacing(2) },
  missionText: {
    color: "white",
    borderBottom: "2px solid rgba(0, 0, 0, 0.0)",
  },
  missionTextUnderline: {
    color: "white",
    borderBottom: "2px solid #00c7d7",
  },
  testColor: { color: "blue" },
  linkButton: { margin: theme.spacing(2), color: "#FFFFFF" },
  logoMark: { height: "14px", margin: "auto" },
  logoText: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#607494",
    margin: "2px",
  },
  thickText: {
    fontWeight: "bold",
    color: "rgb(255,255,255)",
  },
  form: {
    display: "flex",
    justifyContent: "center",
  },
  contactSubTitle: {
    color: "white",
  },
  contactText: {
    color: "rgb(255,255,255)",
  },
}));

function Homepage({ addCustomer, setService }) {
  console.debug("HomePage", "addCustomer=", typeof addCustomer);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Grid
          container
          className={classes.mission}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} className={classes.missionItem}>
            <Typography className={classes.subItem} variant="h2">
              <span className={classes.missionTextUnderline}>Our Mission</span>{" "}
              is to Inspire Organizations to{" "}
              <span className={classes.missionTextUnderline}>
                Create Extraordinary
              </span>{" "}
              Working Cultures
            </Typography>
            <Typography
              className={classes.subItem}
              variant="subtitle1"
              component="p"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              harum? Fuga eos atque ea recusandae deserunt aperiam veniam sint
              doloremque.
            </Typography>
            <Button
              className={classes.linkButton}
              variant="contained"
              component={Link}
              color="primary"
              to="/resources"
            >
              Get Started Here
            </Button>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          container
          className={classes.whatWeDo}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} className={classes.whatWeDoItem}>
            {/* <Grid> */}
            <Icon className={classes.logoMark}>
              <img
                src={ic_logomark}
                alt="logo mark"
                className={classes.logoMark}
              />
            </Icon>
            <Typography
              className={classes.logoText}
              variant="subtitle1"
              component="span"
            >
              WHAT WE DO
            </Typography>
            {/* </Grid> */}
            <Typography variant="h4">
              How Culture Aligment Model Skyrockets Your Efficiency
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              adipisci harum blanditiis dolorum earum dicta incidunt maiores
              illum debitis eveniet consequatur itaque nostrum at aliquam
              deserunt placeat inventore, a rerum. Nostrum eum et iste sit.
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
              </ListItem>
            </List>
            <Button
              className={classes.linkButton}
              variant="contained"
              component={Link}
              color="primary"
              to="/methods"
            >
              Our Methodology
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <VideoList tag="main" />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          container
          justifyContent="flex-end"
          alignContent="center"
          className={classes.services}
        >
          <Grid item xs={12} sm={6} className={classes.servicesItem}>
            <Icon className={classes.logoMark}>
              <img
                src={ic_logomark}
                alt="logo mark"
                className={classes.logoMark}
              />
            </Icon>
            <Typography
              className={classes.logoText}
              variant="subtitle1"
              component="span"
            >
              OUR SERVICES
            </Typography>

            <Typography variant="h4">
              Move from Talking About Your Culture to Tranforming It
            </Typography>
            <Grid item className={classes.cardButton}>
              <CardButton
                icon={ic_service_workshops}
                alt="workshops button"
                headerText="Workshops"
                bodyText=" Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quidem, perspiciatis.
              "
                route="/services"
                onClick={() => {
                  setService("workshops");
                }}
              />
            </Grid>
            <Grid item className={classes.cardButton}>
              <CardButton
                icon={ic_service_assessment}
                alt="assessments button"
                headerText="Culture Assessments"
                bodyText=" Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quidem, perspiciatis.
              "
                route="/services"
                onClick={() => {
                  setService("assessments");
                }}
              />
            </Grid>
            <Grid item className={classes.cardButton}>
              <CardButton
                icon={ic_service_consulting}
                alt="consulting button"
                headerText="Consulting"
                bodyText=" Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quidem, perspiciatis.
              "
                route="/services"
                onClick={() => {
                  setService("consulting");
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container justifyContent="center" className={classes.contact}>
          <Grid item xs={12} className={classes.contactItem}>
            <Typography
              variant="subtitle1"
              className={classes.thickText}
              align="center"
            >
              OUR RESULTS SPEAK FOR THEMSELVES
            </Typography>
            <Typography
              variant="h4"
              className={classes.contactSubTitle}
              align="center"
            >
              Get In Touch to See How We Can Help
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.contactText}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              facilis id aspernatur sit non quod fugit eaque similique
              consequatur tempora!
            </Typography>
            <div className={classes.form}>
              <ContactForm addCustomer={addCustomer} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Homepage;
