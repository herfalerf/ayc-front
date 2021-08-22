import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import * as yup from "yup";

// Contact Form.
//
// Shows contact form and manages state
// On submission
// Calls addCustomer function prop
// calls email function prop
// redirects to /
//
// Routes -> ContactForm -> Alert
// Routed as /
//

const ContactForm = ({ addCustomer, sendEmail }) => {
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
  console.debug(
    "ContactForm",
    "addCustomer=",
    typeof addCustomer,
    "sendEmail=",
    typeof sendEmail
  );

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        }}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          console.debug(values);
          let serverValues = values;
          delete serverValues.message;
          setStatus(undefined);
          let result = await addCustomer(serverValues);
          console.log(result);

          if (result.success) {
            setSubmitting(false);
            history.push("/");
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
            <Field
              label="message"
              type="message"
              name="message"
              component={TextField}
              InputProps={{ multiline: true }}
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

export default ContactForm;
