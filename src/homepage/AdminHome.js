import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Test component for admin homepage
//
// routed at /admin/home
//
// Routes -> AdminHome

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/admin-home/admin-home01.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    minHeight: "25vh",
  },
  adminHeader: {
    padding: theme.spacing(2),
  },
}));

const AdminHome = () => {
  console.debug("AdminHome");

  const classes = useStyles();

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid container justifyContent="center" className={classes.adminHeader}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {" "}
            Welcome to the Admin Portal
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1" align="center">
            You may now use the admin drop down menu on the main navigation bar
            to access admin specific pages or to log out. Please be aware that
            changes you make on the admin portal will permanently affect the
            rest of the site.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminHome;
