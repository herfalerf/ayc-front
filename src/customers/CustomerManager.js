import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AycApi from "../api/api";
import CustomerCard from "./CustomerCard";
import LoadingSpinner from "../common/LoadingSpinner";

// Shows page with a list of customers with buttons to add/edit/delete custoemrs
//
// On Mount, loads customers from API.
//
// This is routed at /admin/customers
//
// Routes -> { Customers }
//

const CustomerManager = () => {
  console.debug("CustomerManager");

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
  console.debug(customers);

  return (
    <div>
      <h1>Customer Manager</h1>
      <p>Here you can add, edit, or delete customers from the database</p>
      <Button
        variant="contained"
        component={Link}
        color="primary"
        to="/admin/customers/add"
      >
        Add A New Customer
      </Button>
      <div>
        {customers.map((c) => (
          <CustomerCard
            id={c.id}
            key={c.key}
            name={c.name}
            email={c.email}
            phone={c.phone}
            company={c.company}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerManager;
