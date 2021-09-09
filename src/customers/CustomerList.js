import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AycApi from "../api/api";
import CustomerCard from "./CustomerCard";
import LoadingSpinner from "../common/LoadingSpinner";

// component which contains list of customers
//
// On Mount, Loads customers from API.
//
// CustomerManager -> CustomerList -> CustomerCard
//

const useStyles = makeStyles((theme) => ({
  customerBox: {
    backgroundColor: "rgb(244,245,248)",
    padding: theme.spacing(4),
  },
  customer: {
    padding: theme.spacing(2),
  },
}));

const CustomerList = () => {
  console.debug("CustomerList");

  const classes = useStyles();

  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    async function getCustomersOnMount() {
      console.debug("CustomerManager useEffect getCustomersOnMount");
      let customers = await AycApi.getCustomers();

      setCustomers(customers);
    }
    getCustomersOnMount();
  }, []);
  if (!customers) return <LoadingSpinner />;

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      alignItems="flex-start"
    >
      {customers.map((c) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={classes.customer}
          key={c.name}
        >
          <CustomerCard
            id={c.id}
            key={c.id}
            name={c.name}
            email={c.email}
            phone={c.phone}
            company={c.company}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomerList;
