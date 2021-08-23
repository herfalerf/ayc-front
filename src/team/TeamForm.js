import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import * as yup from "yup";

// Team member add form
//
// Shows form and manages update to state on changes.
// On submissions:
// call addMember function prop
// redirect to /admin/team route
//
// Routes -> TeamManager -> TeamForm
// Routed as /admin/team/add
//

const TeamForm = ({ addMember }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
  });
  const history = useHistory();

  console.debug("TeamForm", "addMember=", typeof addMember);

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{ name: "", title: "", bio: "", img: "" }}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          setStatus(undefined);
          let result = await addMember(values);
          console.log(result);

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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TeamForm;
