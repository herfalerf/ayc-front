import React, { useState, useEffect } from "react";
import AycApi from "../api/api";
import VideoCard from "./VideoCard";
import LoadingSpinner from "../common/LoadingSpinner";

// Show page with list of videos
//
// On mount, loads videos from API, filtered if a filter is applied.
//
// this is routed at /resources, but is also used on other pages to display filtered video lists
//
// Routes -> { VideoCard }

function VideoList({ tag }) {
  console.debug(`VideoList, tag=${tag}`);

  const [videos, setVideos] = useState(null);

  //   useEffect(async function getVideosOnMount() {
  //     console.debug("VideoList useEffect getVideosOnMount");
  //     let videos = await AycApi.getVideos(tag);
  //     setVideos(videos);
  //   }, []);

  useEffect(function getVideosOnMount() {
    console.debug("VideoList useEffect getVideosOnMount");
    getVideos(tag);
  }, []);

  async function getVideos(tag) {
    let videos = await AycApi.getVideos(tag);
    setVideos(videos);
  }

  if (!videos) return <LoadingSpinner />;
  console.debug(videos);
  return (
    <div>
      {videos.map((v) => (
        <VideoCard key={v.name} link={v.link} />
      ))}
    </div>
  );
}

export default VideoList;
