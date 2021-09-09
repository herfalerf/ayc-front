import React from "react";
import ContactForm from "./ContactForm";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Icon, Link } from "@material-ui/core";
import ic_contact_mail from "../common/images/ic_contact_mail.svg";
import ic_contact_phone from "../common/images/ic_contact_phone.svg";

// Contact Page
//
// Displays contact form
//
// Routed at /contact
//
// Routes -> Contact
//

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/contact/contact01.png')`,
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
  form: {
    padding: theme.spacing(4),
    backgroundColor: "rgb(244,245,248)",
  },
  message: {
    color: "#00c7d7",
  },
  contactBox: { padding: theme.spacing(4) },
  contactTitle: {
    padding: theme.spacing(1),
    color: "#00c7d7",
    fontWeight: "bold",
  },
  contactSubtitle: {
    paddingLeft: theme.spacing(1),
  },
  contactText: {
    padding: theme.spacing(2),
  },
}));

function Contactpage({ addCustomer }) {
  console.debug("Contactpage", "addCustomer=", typeof addCustomer);

  const classes = useStyles();

  return (
    <div>
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
            It Starts With a Conversation
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="subtitle1" align="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Libero at
            voluptate officiis sed atque, ipsam quod est dicta veritatis eaque
            aut, sequi sapiente veniam eveniet aliquid totam?
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="center"
          item
          className={classes.contactBox}
        >
          <Grid container alignItems="center" item xs={12} sm={4} lg={3}>
            <Grid item>
              <Typography align="center">
                <Link component="a" href="tel:1231231234">
                  <Icon>
                    <img
                      src={ic_contact_phone}
                      alt="phone icon"
                      className={classes.mainIcon}
                    />
                  </Icon>
                </Link>
              </Typography>
            </Grid>
            <Grid item className={classes.contactText}>
              <Typography variant="subtitle2" className={classes.contactTitle}>
                CALL US
              </Typography>
              <Typography className={classes.contactSubtitle}>
                123-123-1234
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" item xs={12} sm={4} lg={3}>
            <Grid item>
              <Typography align="center">
                <Link component="a" href="mailto:test@email.com">
                  {" "}
                  <Icon>
                    <img
                      src={ic_contact_mail}
                      alt="email icon"
                      className={classes.mainIcon}
                    />
                  </Icon>
                </Link>
              </Typography>
            </Grid>
            <Grid item className={classes.contactText}>
              <Typography variant="subtitle2" className={classes.contactTitle}>
                EMAIL US
              </Typography>
              <Typography className={classes.contactSubtitle}>
                test@email.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.form}>
        <Grid item>
          <Typography variant="h5" className={classes.message}>
            Send a Message
          </Typography>
          <ContactForm addCustomer={addCustomer} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Contactpage;
