import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";

// Customer Form.
//
// Shows add customer form
// On submission calls addCustomer function prop
// redirects to /admin/customers
//
// Routes -> CustomerManager -> CustomerForm
// Routed at /admin/customer/add
//

const useStyles = makeStyles((theme) => ({
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/admin-home/admin-home01.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    minHeight: "25vh",
  },
  form: {
    padding: theme.spacing(4),
    backgroundColor: "rgb(244,245,248)",
  },
  message: {
    color: "#00c7d7",
  },
}));

const CustomerForm = ({ addCustomer }) => {
  const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  const classes = useStyles();

  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email Required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Please enter a valid phone number"),
  });
  const history = useHistory();
  console.debug("ContactForm", "addCustomer=", typeof addCustomer);

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid container justifyContent="center" className={classes.form}>
        <Grid item>
          <Typography variant="h5" className={classes.message}>
            Add a New Customer
          </Typography>
          <Formik
            validationSchema={schema}
            initialValues={{
              name: "",
              email: "",
              company: "",
              phone: "",
            }}
            onSubmit={async (values, { setStatus, setSubmitting }) => {
              setStatus(undefined);
              let result = await addCustomer(values);

              if (result.success) {
                setSubmitting(false);
                history.push("/admin/customers");
              } else {
                setSubmitting(false);
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
                  label="email*"
                  type="email"
                  name="email"
                  component={TextField}
                />
                <br />
                <Field
                  label="company"
                  type="company"
                  name="company"
                  component={TextField}
                />
                <br />
                <Field
                  label="phone"
                  type="phone"
                  name="phone"
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
};

export default CustomerForm;
