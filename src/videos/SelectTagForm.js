import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import * as yup from "yup";

const SelectTagForm = ({ setVideo, videoId, availableTags, tagVideo }) => {
  console.debug("TagVideoForm", "videoId", videoId);
  const schema = yup.object().shape({
    tag: yup.string().required("Tag is required"),
  });
  return (
    <div>
      <h2>Add a Tag</h2>
      <Formik
        validationSchema={schema}
        initialValues={{ tag: undefined }}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          setStatus(undefined);
          console.debug("videoId=", videoId, "values=", values);
          let data = { tag_id: values.tag };
          let result = await tagVideo(videoId, data);
          console.debug(result);

          if (result.success) {
            setSubmitting(false);
            setVideo(result.video);
          } else {
            setStatus({ error: result.errors });
          }
        }}
      >
        {({ status }) => (
          <Form>
            <Field as="select" name="tag">
              <option value={undefined}>Select a tag</option>

              {availableTags &&
                availableTags.map((t) => (
                  <option value={t.id} label={t.name} key={t.name} />
                ))}
            </Field>
            <br />
            {status && status.error ? (
              <div>API Error: {status.error}</div>
            ) : null}
            <br />
            <Button variant="contained" color="primary" type="submit">
              Add Tag
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SelectTagForm;
