import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ContactElement = () => {
  return (
    <div>
      <h3>Our results speak for themselves</h3>
      <h1>Get in Touch To see How We Can Help</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio saepe
        alias explicabo dignissimos doloribus consequuntur et eum sit? Corrupti,
        excepturi!
      </p>
      <Button
        variant="contained"
        component={Link}
        color="primary"
        to="/contact"
      >
        Send a Message
      </Button>
    </div>
  );
};

export default ContactElement;
