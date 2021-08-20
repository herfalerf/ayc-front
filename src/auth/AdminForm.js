import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

// Admin Login form.
//
// Shows form and manages update to state on changes.
// On submission:
// - calls login function prop
// - redirects to /admin route
//
// Routes -> AdminForm -> Alert
// Routed as /login
//

function AdminForm({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "AdminForm",
    "login=",
    typeof login,
    "formData=",
    formData,
    "formErrors",
    formErrors
  );

  // Handle form submit
  //
  // Calls login func prop and, if successful, redirect to /admin.
  //

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/admin/home");
    } else {
      setFormErrors(result.errors);
    }
  }

  // Update form data field
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          name="username"
          className="form-control"
          value={formData.username}
          onChange={handleChange}
          autoComplete="username"
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />
      </div>

      {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}

      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default AdminForm;
