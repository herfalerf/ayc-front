import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import ConfirmDialog from "../common/ConfirmDialog";
import * as yup from "yup";
import AycApi from "../api/api";

// Customer edit form
//
// Displays customer edit form
// Submitting the form calls the API to save
//
// Routed as /admin/customer/:id

const CustomerEditForm = ({ editCustomer, deleteCustomer }) => {
  const { id } = useParams();
  const [delErrors, setDelErrors] = useState([]);
  console.debug("CustomerEditForm", "id=", id);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

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
            if (result.errors[0] === `Email already exists: ${values.email}`) {
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
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={async ({ setStatus }) => {
                let result = await deleteCustomer(id);
                if (result.success) {
                  history.push("/admin/customers");
                } else {
                  setStatus({ error: result.errors });
                }
              }}
            >
              Delete
            </Button>
            <AlertDialog
              alertSubmit={async (setStatus) => {
                let result = await deleteCustomer(id);
                if (result.success) {
                  history.push("/admin/customers");
                } else {
                  setStatus({ error: result.errors });
                }
              }}
            ></AlertDialog> */}
            <ConfirmDialog
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomerEditForm;
