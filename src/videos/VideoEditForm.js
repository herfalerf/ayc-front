import React, { useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmDialog from "../common/ConfirmDialog";
import * as yup from "yup";
import AycApi from "../api/api";
import SelectTagForm from "./SelectTagForm";

// Video edit form
//
// Displays video edit form and handles changes to local form state.
// Submitting the form calls the API to save
//
// Routed as /admin/videos/:id
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

const VideoEditForm = ({ editVideo, deleteVideo, tagVideo, untagVideo }) => {
  const { id } = useParams();
  console.debug("VideoEditForm", "id=", id);

  const classes = useStyles();

  const [video, setVideo] = useState({
    name: "",
    description: "",
    link: "",
    tags: [],
  });
  const [tags, setTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);

  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
    link: yup.string().required("Link required"),
  });

  useEffect(function getTagsOnMount() {
    async function getTags() {
      setTags(await AycApi.getTags());
    }
    getTags();
  }, []);

  useDeepCompareEffect(
    function getVids() {
      async function getVideo() {
        setVideo(await AycApi.getVideo(id));
      }

      getVideo();
    },
    [id, video]
  );

  useDeepCompareEffect(
    function setTagsList() {
      function setList() {
        let usedTags = {};

        for (let tag of video.tags) {
          usedTags[tag.tag_name] = tag.tag_id;
        }

        let difference = [];

        for (let tag of tags) {
          if (!usedTags[tag.name]) {
            console.log(usedTags[tag.name]);
            difference.push(tag);
          }
        }
        setAvailableTags(difference);

        console.debug("these are the usedTags=", usedTags);
        console.debug("these are all the tags", tags);

        console.debug("these are the available tags=", availableTags);
      }

      setList();
    },
    [tags, video]
  );

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.form}
      >
        <Grid item>
          <Typography variant="h5" className={classes.message}>
            Edit Video with Id: {video.id}
          </Typography>
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
                      let result = await deleteVideo(id);

                      if (result.success) {
                        history.push(`/admin/videos`);
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
        <Grid container justifyContent="center" className={classes.form}>
          <Grid item>
            <Typography variant="h5" className={classes.message}>
              Tags:
            </Typography>
            {video.tags &&
              video.tags.map((t) => (
                <div key={t.tag_name}>
                  <p>{t.tag_name}</p>
                  <ConfirmDialog
                    key={t.tag_id}
                    name="Remove"
                    title="Are you sure you want to remove this tag?"
                    color="secondary"
                    onConfirm={async () => {
                      let data = { tag_id: t.tag_id };
                      let result = await untagVideo(id, data);
                      console.debug(
                        "this is the result of the remove tag=",
                        result.success
                      );
                      if (result.success) {
                        setVideo(result.video);
                      } else {
                        console.debug("API error", result.errors);
                      }
                    }}
                  />
                </div>
              ))}

            <SelectTagForm
              setVideo={setVideo}
              videoId={id}
              availableTags={availableTags}
              tagVideo={tagVideo}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoEditForm;
