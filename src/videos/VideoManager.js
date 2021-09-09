import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AycApi from "../api/api";
import VideoList from "./VideoList";
import LoadingSpinner from "../common/LoadingSpinner";

// Shows page with a list of videos with buttons to add/edit/delete videos
//
// On mount, loads videos from API
//
// This is routed at /admin/videos
//
// Routes -> VideoManager
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
  videoHeader: {
    padding: theme.spacing(2),
  },
}));

const VideoManager = ({ usename }) => {
  console.debug("VideoManager");

  const classes = useStyles();

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    async function getVideosOnMount() {
      console.debug("VideoManager useEffect getVideosOnMount");
      let videos = await AycApi.getVideos();

      setVideos(videos);
    }
    getVideosOnMount();
  }, []);
  if (!videos) return <LoadingSpinner />;

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid container justifycontent="center" className={classes.videoHeader}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Video Manager
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            Here you can add, edit or delete videos from the database. Click
            edit button to edit/delete video
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Button
              variant="contained"
              component={Link}
              color="primary"
              to="/admin/videos/add"
            >
              Add A New Video
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <VideoList usename="true" useid="true" admin="true" library="true" />
    </div>
  );
};

export default VideoManager;
