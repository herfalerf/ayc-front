import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import * as yup from "yup";

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
  const schema = yup.object().shape({
    username: yup.string().required("username required"),
    password: yup.string().required("password required"),
  });

  console.debug("AdminForm", "login=", typeof login);

  // Update form data field

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          setStatus(undefined);
          let result = await login(values);
          console.log(result);

          if (result.success) {
            setSubmitting(false);
            history.push("/admin/videos");
          } else {
            setStatus({ error: result.errors });
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <Field
              label="username*"
              type="username"
              name="username"
              component={TextField}
            />

            <br />
            <Field
              label="password"
              type="password"
              name="password"
              component={TextField}
            />

            <br />

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
}

export default AdminForm;
