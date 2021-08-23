import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import AycApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import useTimedMessage from "../hooks/useTimedMessage";

// Team member edit form
//
// Displays team member edit form and handles changes to local form state.
// Submitting the form calls the API to save, and triggers team relading throughout the site.
//
// Confirmation of a successful save is an <Alert>
//
// Routed as /admin/team/:name

const TeamEditForm = () => {
  const { id } = useParams();
  console.debug("TeamEditForm", "id=", id);

  const history = useHistory();
  const [member, setMember] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(
    function getTeamMember() {
      async function getMember() {
        setMember(await AycApi.getMember(id));
      }

      getMember();
    },
    [id]
  );

  useEffect(
    function getFormData() {
      if (member) {
        setFormData({
          name: member.name,
          title: member.title,
          bio: member.bio,
          img: member.img,
        });
      }
    },
    [member]
  );

  const [formErrors, setFormErrors] = useState([]);
  //   const [saveConfirmed, setSaveConfirmed] = useState(false);
  const [saveConfirmed, setSaveConfirmed] = useTimedMessage();

  console.debug(
    "TeamEditForm",
    "member=",
    member,
    "formData=",
    formData,
    "formErrors=",
    formErrors,
    "saveConfirmed=",
    saveConfirmed
  );

  /** on form submit:
   * - attempt save to backend & report any errors
   * - if successful
   *   - clear previous error messages
   *   - show save-confirmed message
   */

  async function handleSubmit(evt) {
    evt.preventDefault();

    let memberData = {
      name: formData.name,
      title: formData.title,
      bio: formData.bio,
      img: formData.img,
    };

    if (memberData.name === "") {
      memberData.name = null;
    }
    if (memberData.title === "") {
      memberData.title = null;
    }

    let id = member.id;

    try {
      await AycApi.editMember(id, memberData);
    } catch (errors) {
      setFormErrors(errors);
      return;
    }

    setFormData((f) => ({ ...f }));
    setFormErrors([]);
    setSaveConfirmed(true);
  }

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }
  if (!member || !formData) return <LoadingSpinner />;
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Team Member Id</label>
          <p className="form-control-plaintext">{member.id}</p>
        </div>
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
          <textarea
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

        {saveConfirmed ? (
          <Alert type="success" messages={["Updated successfully."]} />
        ) : null}

        <button
          className="btn btn-primary btn-block mt-4"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default TeamEditForm;
