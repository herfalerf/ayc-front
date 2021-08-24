import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AycApi from "../api/api";
import VideoCard from "./VideoCard";
import LoadingSpinner from "../common/LoadingSpinner";

// Shows page with a list of videos with buttons to add/edit/delete videos
//
// On mount, loads videos from API
//
// This is routed at /admin/videos
//
// Routes -> VideoManager
//

const VideoManager = () => {
  console.debug("VideoManager");

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
      <h1>Video Manager</h1>
      <p>Here you can add, edit or delete videos from the database</p>
      <Button
        variant="contained"
        component={Link}
        color="primary"
        to="/admin/videos/add"
      >
        Add A New Video
      </Button>
      {videos.map((v) => (
        <VideoCard
          id={v.id}
          key={v.name}
          name={v.name}
          link={v.link}
          description={v.description}
        />
      ))}
    </div>
  );
};

export default VideoManager;
