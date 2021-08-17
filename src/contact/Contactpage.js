import React from "react";
import ContactForm from "./ContactForm";

// Contact Page
//
// Displays contact form
//
// Routed at /contact
//
// Routes -> Contact
//

function Contactpage(addCustomer) {
  console.debug("Contactpage");

  return (
    <div>
      <h3>It Starts with a Conversation</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eveniet
        molestiae sunt illo asperiores veritatis aliquam autem repudiandae
        nostrum molestias!
      </p>
      <ContactForm addCustomer={addCustomer} />
    </div>
  );
}

export default Contactpage;
