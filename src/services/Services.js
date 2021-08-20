import React, { useState } from "react";
import ContactElement from "../contact/ContactElement";
import Workshops from "./Workshops";
import Assessments from "./Assessments";
import Consulting from "./Consulting";

// Services
//
// Renders services page
//
// Routed at /services
//
// Routes -> services

const Services = () => {
  console.debug("Services");

  const [service, setService] = useState(Workshops);

  function viewWorkshops(evt) {
    setService(Workshops);
  }
  function viewAssessments(evt) {
    setService(Assessments);
  }
  function viewConsulting(evt) {
    setService(Consulting);
  }

  return (
    <div>
      <div>
        <h1>Services to Help You Transform Your Business</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <button onClick={viewWorkshops}>Workshops</button>
        <button onClick={viewAssessments}>Culture Assessments</button>
        <button onClick={viewConsulting}>Consulting</button>
      </div>
      <div>{service}</div>
      <div>
        <h3>Our results speak for themselves</h3>
        <h1>Get in Touch To see How We Can Help</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio saepe
          alias explicabo dignissimos doloribus consequuntur et eum sit?
          Corrupti, excepturi!
        </p>
        <ContactElement />
      </div>
    </div>
  );
};

export default Services;
