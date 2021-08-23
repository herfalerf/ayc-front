import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
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

const CustomerForm = ({ addCustomer }) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email Required"),
    phone: yup
      .string()
      .matches(
        phoneRegExp,
        "Please enter phone number in format ###-###-#### or ##########"
      ),
  });
  const history = useHistory();
  console.debug("ContactForm", "addCustomer=", typeof addCustomer);

  return (
    <div>
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomerForm;
