import React, { useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import ConfirmDialog from "../common/ConfirmDialog";
import * as yup from "yup";
import AycApi from "../api/api";

// Video edit form
//
// Displays video edit form and handles changes to local form state.
// Submitting the form calls the API to save
//
// Routed as /admin/videos/:id
//

const VideoEditForm = ({ editVideo, deleteVideo }) => {
  const { id } = useParams();
  console.debug("VideoEditForm", "id=", id);
  const [video, setVideo] = useState({
    name: "",
    description: "",
    link: "",
  });

  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
    link: yup.string().required("Link required"),
  });

  useDeepCompareEffect(
    function getVid() {
      async function getVideo() {
        setVideo(await AycApi.getVideo(id));
      }

      getVideo();
    },
    [id, video]
  );
  console.debug(video);

  return (
    <div>
      <h2>Edit Video with Id: {video.id}</h2>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: video.name,
          description: video.description,
          link: video.link,
        }}
        enableReinitialize={true}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          setStatus(undefined);
          console.debug("id=", id, "values=", values);
          let result = await editVideo(id, values);
          console.debug(result);

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
              label="name*"
              type="name"
              name="name"
              component={TextField}
            />

            <br />
            <Field
              label="description"
              type="description"
              name="description"
              component={TextField}
              InputProps={{ multiline: true }}
            />

            <br />
            <Field
              label="link"
              type="link"
              name="link"
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
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={async ({ setStatus }) => {
                let result = await deleteMember(id);
                if (result.success) {
                  history.push("/admin/team");
                } else {
                  setStatus({ error: result.errors });
                }
              }}
            >
              Delete
            </Button> */}
            <ConfirmDialog
              title="Are you sure you want to delete?"
              color="secondary"
              onConfirm={async () => {
                let result = await deleteVideo(id);

                if (result.success) {
                  history.push("/admin/videos");
                } else {
                  console.debug("API error", result.errors);
                }
              }}
            ></ConfirmDialog>
          </Form>
        )}
      </Formik>
      <h2>Tags:</h2>
      {video.tags && video.tags.map((t) => <h3>{t}</h3>)}
    </div>
  );
};

export default VideoEditForm;
