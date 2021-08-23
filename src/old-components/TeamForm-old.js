import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

// Team member add form
//
// Shows form and manages update to state on changes.
// On submissions:
// call addMember function prop
// redirect to /admin/team route
//
// Routes -> TeamManager -> TeamForm -> Alert
// Routed as /admin/team/add
//

const TeamForm = ({ addMember }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    img: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "TeamForm",
    "addMember=",
    typeof addMember,
    "formData=",
    formData,
    "formErrors=",
    formErrors
  );

  //   Handle form submit:
  //
  // Calls addMember func prop and, if successful, redirect to /admin/team
  //

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await addMember(formData);
    if (result.success) {
      history.push("/admin/team");
    } else {
      setFormErrors(result.errors);
    }
  }

  //   Update form data field
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <input
            name="bio"
            className="form-control"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="img"
            className="form-control"
            value={formData.img}
            onChange={handleChange}
          />
        </div>

        {formErrors.length ? (
          <Alert type="danger" messages={formErrors} />
        ) : null}

        <button
          type="submit"
          className="btn btn-primary float-right"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeamForm;
