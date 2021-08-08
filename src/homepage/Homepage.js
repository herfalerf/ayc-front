import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import ContactForm from "../contact/ContactForm";
import VideoCard from "../videos/VideoCard";
import VideoList from "../videos/VideoList";

// Homepage of site.
//
// Routed at /
//
// Routes -> Homepage
//

function Homepage({ addCustomer }) {
  // const { currentUser } = useContext(UserContext);
  // console.debug("Homepage", "currentUser=", currentUser)

  return (
    <div>
      <div>
        <h1>
          Our Mission is to Inspire Organizations to Create Extraordinary
          Working Cultures
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, harum?
          Fuga eos atque ea recusandae deserunt aperiam veniam sint doloremque.
        </p>
        <Button
          variant="contained"
          component={Link}
          color="primary"
          to="/resources"
        >
          Get Started Here
        </Button>
      </div>
      <div>
        <p>WHAT WE DO</p>
        <h3>How Culture Aligment Model Skyrockets Your Efficiency</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          adipisci harum blanditiis dolorum earum dicta incidunt maiores illum
          debitis eveniet consequatur itaque nostrum at aliquam deserunt placeat
          inventore, a rerum. Nostrum eum et iste sit.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        </ul>
        <Button
          variant="contained"
          component={Link}
          color="primary"
          to="/methods"
        >
          Our Methodology
        </Button>
        {/* <VideoCard link="https://www.youtube.com/embed/5qap5aO4i9A" /> */}
        <VideoList tag="main" />
      </div>
      <div>
        <p>OUR SERVICES</p>
        <h3>Move from Talking About Your Culture to Tranforming It</h3>
        <li>Workshops</li>
        <li>Culture Assessments</li>
        <li>Consulting</li>
      </div>
      <ContactForm addCustomer={addCustomer} />
    </div>
  );
}

export default Homepage;
