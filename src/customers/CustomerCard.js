import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Show information about a customer
//
// Is rendered by CustomerManager to show a "card" for each team member.
//
// CustomerManager -> CustomerCard
//

const CustomerCard = ({ id, name, email, phone, company }) => {
  console.debug("CustomerCard", `CustomerId=${id}`, `CustomerName=${name}`);

  return (
    <div>
      <h3>{name}</h3>
      <p>customer id: {id}</p>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <p>company: {company}</p>
      <Button
        variant="contained"
        componet={Link}
        color="primary"
        to={`/admin/customers/${id}`}
      >
        Edit
      </Button>
    </div>
  );
};

export default CustomerCard;
