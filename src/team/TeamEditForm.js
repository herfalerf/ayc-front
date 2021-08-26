import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import ConfirmDialog from "../common/ConfirmDialog";
import * as yup from "yup";
import AycApi from "../api/api";

// Team member edit form
//
// Displays team member edit form and handles changes to local form state.
// Submitting the form calls the API to save
//
// Routed as /admin/team/:id

const TeamEditForm = ({ editMember, deleteMember }) => {
  const { id } = useParams();
  console.debug("TeamEditForm", "id=", id);
  const [member, setMember] = useState({
    name: "",
    title: "",
    bio: "",
    img: "",
  });
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
  });

  useEffect(
    function getTeamMember() {
      async function getMember() {
        setMember(await AycApi.getMember(id));
      }

      getMember();
    },
    [id]
  );

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: member.name,
          title: member.title,
          bio: member.bio,
          img: member.img,
        }}
        enableReinitialize={true}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          setStatus(undefined);
          console.debug("id=", id, "values=", values);
          let result = await editMember(id, values);
          console.debug(result);

          if (result.success) {
            setSubmitting(false);
            history.push("/admin/team");
          } else {
            setStatus({ error: result.errors });
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <Field
              label="name*"
              type="name"
              name="name"
              component={TextField}
            />

            <br />
            <Field
              label="title"
              type="title"
              name="title"
              component={TextField}
            />

            <br />
            <Field
              label="bio"
              type="bio"
              name="bio"
              component={TextField}
              InputProps={{ multiline: true }}
            />

            <br />
            <Field label="img" type="img" name="img" component={TextField} />

            {status && status.error ? (
              <div>API Error: {status.error}</div>
            ) : null}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
            <ConfirmDialog
              name="Delete"
              title="Are you sure you want to delete?"
              color="secondary"
              onConfirm={async () => {
                let result = await deleteMember(id);

                if (result.success) {
                  history.push("/admin/customers");
                } else {
                  console.debug("API error", result.errors);
                }
              }}
            ></ConfirmDialog>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TeamEditForm;
