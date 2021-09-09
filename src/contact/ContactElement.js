import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contactItem: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/contact/contactlink.png')`,
    backgroundSize: "cover",
    backgroundPosition: "right bottom",
    padding: theme.spacing(6),
    minHeight: "25vh",
  },
  button: { color: "#FFFFFF" },
  thickText: {
    fontWeight: "bold",

    color: "rgb(255,255,255)",
    padding: theme.spacing(1),
  },
  contactSubTitle: {
    color: "white",
    padding: theme.spacing(1),
  },
  contactText: {
    color: "rgb(255,255,255)",
    padding: theme.spacing(1),
  },
}));

const ContactElement = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.contactItem}
      >
        <Grid item xs={12}>
          {" "}
          <Typography
            variant="subtitle1"
            className={classes.thickText}
            align="center"
          >
            OUR RESULTS SPEAK FOR THEMSELVES
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Typography
            variant="h4"
            className={classes.contactSubTitle}
            align="center"
          >
            Get In Touch to See How We Can Help
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.contactText}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            facilis id aspernatur sit non quod fugit eaque similique consequatur
            tempora!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Typography align="center" className={classes.contactText}>
            <Button
              className={classes.button}
              variant="contained"
              component={Link}
              color="primary"
              to="/contact"
            >
              Send a Message
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactElement;
