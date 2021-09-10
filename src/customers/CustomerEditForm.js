import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmDialog from "../common/ConfirmDialog";
import * as yup from "yup";
import AycApi from "../api/api";

// Customer edit form
//
// Displays customer edit form
// Submitting the form calls the API to save
//
// Routed as /admin/customer/:id

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

const CustomerEditForm = ({ editCustomer, deleteCustomer }) => {
  const { id } = useParams();
  console.debug("CustomerEditForm", "id=", id);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  const classes = useStyles();

  const history = useHistory();
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

  useEffect(
    function getCustomer() {
      async function getCust() {
        setCustomer(await AycApi.getCustomer(id));
      }
      getCust();
    },
    [id]
  );

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid container justifyContent="center" className={classes.form}>
        <Grid item>
          <Typography variant="h5" className={classes.message}>
            Edit Customer
          </Typography>
          <Formik
            validationSchema={schema}
            initialValues={{
              name: customer.name,
              email: customer.email,
              company: customer.company,
              phone: customer.phone,
            }}
            enableReinitialize={true}
            onSubmit={async (values, { setStatus, setSubmitting }) => {
              setStatus(undefined);
              console.debug("id", id, "values=", values);
              let result = await editCustomer(id, values);
              console.debug(result);

              if (result.success) {
                setSubmitting(false);
                history.push("/admin/customers");
              } else {
                if (
                  result.errors[0] === `Email already exists: ${values.email}`
                ) {
                  setSubmitting(false);
                  history.push("/");
                } else {
                  setStatus({ error: result.errors });
                }
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
                <ButtonGroup>
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
                      let result = await deleteCustomer(id);

                      if (result.success) {
                        history.push("/admin/customers");
                      } else {
                        console.debug("API error", result.errors);
                      }
                    }}
                  ></ConfirmDialog>
                </ButtonGroup>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerEditForm;
