import React, { useState, useEffect } from "react";
import AycApi from "../api/api";
import VideoCard from "./VideoCard";
import LoadingSpinner from "../common/LoadingSpinner";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Show page with list of videos
//
// On mount, loads videos from API, filtered if a filter is applied.
//
// this is routed at /resources, but is also used on other pages to display filtered video lists
//
// Routes -> { VideoCard }

const useStyles = makeStyles((theme) => ({
  video: {
    padding: theme.spacing(2),
  },
  library: {
    padding: theme.spacing(6),
  },
}));

function VideoList({ tag, usename, usedescription, library, admin, useid }) {
  console.debug(`VideoList, tag=${tag}, usename=${usename}`);

  const classes = useStyles();

  const [videos, setVideos] = useState(null);

  useEffect(
    function getVideosOnMount() {
      console.debug("VideoList useEffect getVideosOnMount");
      getVideos(tag);
    },
    [tag]
  );

  async function getVideos(tag) {
    let videos = await AycApi.getVideos(tag);
    setVideos(videos);
  }

  if (!videos) return <LoadingSpinner />;
  console.debug(videos);
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      alignItems="flex-start"
    >
      {videos.map((v) =>
        library ? (
          <Grid item xs={12} sm={6} className={classes.library} key={v.name}>
            <VideoCard
              id={v.id}
              useid={useid}
              link={v.link}
              name={v.name}
              usename={usename}
              description={v.description}
              usedescription={usedescription}
              admin={admin}
            />
          </Grid>
        ) : (
          <Grid item xs={12} className={classes.video} key={v.name}>
            <VideoCard
              id={v.id}
              useid={useid}
              link={v.link}
              name={v.name}
              usename={usename}
              description={v.description}
              usedescription={usedescription}
              admin={admin}
            />
          </Grid>
        )
      )}
    </Grid>
  );
}

export default VideoList;
