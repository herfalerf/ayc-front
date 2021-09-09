import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Grid, Typography } from "@material-ui/core";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/admin-home/admin-home01.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    minHeight: "25vh",
  },
  form: {
    padding: theme.spacing(4),
  },
}));

function AdminForm({ login }) {
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup.string().required("username required"),
    password: yup.string().required("password required"),
  });

  console.debug("AdminForm", "login=", typeof login);

  const classes = useStyles();

  // Update form data field

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid container justifyContent="center" className={classes.form}>
        <Grid item>
          <Typography vairant="h5">Please Sign In for Admin Access</Typography>
          <Formik
            validationSchema={schema}
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values, { setStatus, setSubmitting }) => {
              setStatus(undefined);
              let result = await login(values);
              console.log(result);

              if (result.success) {
                setSubmitting(false);
                history.push("/admin/home");
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
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminForm;
