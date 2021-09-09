import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
} from "@material-ui/core";
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
      <Card>
        <CardHeader title={name} subheader={email} />
        <CardContent>
          <Typography variant="body2" component="p">
            Customer id: {id}
          </Typography>
          <Typography variant="body2" component="p">
            Company: {company}
          </Typography>
          <Typography variant="body2" component="p">
            Phone: {phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            component={Link}
            color="primary"
            to={`/admin/customers/${id}`}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomerCard;
