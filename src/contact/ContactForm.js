import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

// Contact Form.
//
// Shows contact form and manages state
// On submission
// Calls addCustomer function prop
// calls email function prop
// redirects to /
//
// Routes -> ContactForm -> Alert
// Routed as /
//

function ContactForm({ addCustomer, email }) {
  const INITIAL_STATE = {
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  };
  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "ContactForm",
    "addCustomer=",
    typeof addCustomer,
    "email=",
    typeof email,
    "formData=",
    formData,
    "formErrors=",
    formErrors
  );

  // Handle form submit:
  //
  // Calls addCustomer func prop and email prop and if successful, redirect to /.
  //

  async function handleSubmit(evt) {
    evt.preventDefault();
    let customerData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
    };
    let result = await addCustomer(customerData);
    console.debug("handleSubmit result=", result);
    if (result.success) {
      setFormData(INITIAL_STATE);
      history.push("/");
    } else {
      if (result.errors[0] === `Email already exists: ${formData.email}`) {
        setFormData(INITIAL_STATE);
      } else {
        setFormErrors(result.errors);
        console.debug("formErrors=", formErrors);
      }
    }
  }

  //   Update form data field
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div>
      <div>
        <h2> Send a Message</h2>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Message</label>
                <input
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <button type="submit" onSubmit={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
