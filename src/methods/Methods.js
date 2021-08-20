import React from "react";
import ContactElement from "../contact/ContactElement";

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
      <ContactElement />
    </div>
  );
};

export default Methods;
