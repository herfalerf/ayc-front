import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomerList from "./CustomerList";

// Shows page with a list of customers with buttons to add/edit/delete custoemrs
//
// On Mount, loads customers from API.
//
// This is routed at /admin/customers
//
// Routes -> CustomerManager
//

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/admin-home/admin-home01.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    minHeight: "25vh",
  },
  customerHeader: {
    padding: theme.spacing(2),
  },
}));

const CustomerManager = () => {
  console.debug("CustomerManager");

  const classes = useStyles();

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid
        container
        justifyContent="center"
        className={classes.customerHeader}
      >
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Customer Manager
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            Here you can add, edit, or delete customers from the database
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            {" "}
            <Button
              variant="contained"
              component={Link}
              color="primary"
              to="/admin/customers/add"
            >
              Add A New Customer
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <CustomerList />
    </div>
  );
};

export default CustomerManager;
