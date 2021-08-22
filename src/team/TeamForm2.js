import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const TeamForm = ({ addMember }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
  });
  const history = useHistory();

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{ name: "", title: "", bio: "", img: "" }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.name) {
        //     errors.name = "Required";
        //   }
        //   return errors;
        // }}
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
        {({ isSubmitting, status, errors }) => (
          <Form>
            <Field label="name" type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field label="title" type="title" name="title" />
            <ErrorMessage name="title" component="div" />
            <Field label="bio" type="bio" name="bio" component="textarea" />
            <ErrorMessage name="bio" component="div" />
            <Field label="img" type="img" name="img" />
            <ErrorMessage name="img" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {status && status.error ? (
              <div>API Error: {status.error}</div>
            ) : (
              errors.name && <div>Validation Error: {errors.name}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TeamForm;
