import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Methods page
//
// Rendered at /methods
//
// Routes -> Methods
//

const Methods = () => {
  console.debug("Methods");

  return (
    <div>
      <div>
        <h3>Cultural Alignment Model</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio saepe
          alias explicabo dignissimos doloribus consequuntur et eum sit?
          Corrupti, excepturi!
        </p>
      </div>
      <div>
        <h5>Why Use Our Methodology?</h5>
        <h3>We Make it easy to Transform Your Company Culture</h3>
        <div>
          <h4>Motivate your team</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur sunt non fuga sapiente vero dicta?
          </p>
        </div>
        <div>
          <h4>Create a Thriving Environment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur sunt non fuga sapiente vero dicta?
          </p>
        </div>
        <div>
          <h4>Establish Faith in Leadership</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur sunt non fuga sapiente vero dicta?
          </p>
        </div>
        <div>
          <h4>Inspire Your Team for Greatness</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur sunt non fuga sapiente vero dicta?
          </p>
        </div>
      </div>
      <div>
        <h3>Our results speak for themselves</h3>
        <h1>Get in Touch To see How We Can Help</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio saepe
          alias explicabo dignissimos doloribus consequuntur et eum sit?
          Corrupti, excepturi!
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
    </div>
  );
};

export default Methods;
