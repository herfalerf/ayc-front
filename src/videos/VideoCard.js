import React from "react";

// Display embedded youtube video
//
// Is rendered by VideoList to a show a "card" for each video.
//
// VideoList -> VideoCard

function VideoCard({ link, name, username }) {
  console.debug("VideoCard", link);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {name && <h3> {name}</h3>}
    </div>
  );
}

export default VideoCard;
