import React from "react";
import VideoList from "./VideoList";

// Video library
//
// Displays video list component
//
// Routed at /resources
//
// Routes -> VideoLibrary

function VideoLibrary() {
  console.debug("VideoLibrary");

  return (
    <div>
      <h3>Get Started with Our Resource Library</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <VideoList usename="true" />
    </div>
  );
}

export default VideoLibrary;
