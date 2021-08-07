import React from "react";

// Display embedded youtube video
//
// Is rendered by VideoList to a show a "card" for each video.
//
// VideoList -> VideoCard

function VideoCard({ link }) {
  console.debug("VideoCard", link);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoCard;
