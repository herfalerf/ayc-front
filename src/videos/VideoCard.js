import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Display embedded youtube video
//
// Is rendered by VideoList to a show a "card" for each video.
//
// VideoList -> VideoCard

function VideoCard({ id, link, name, description, usename, admin }) {
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
      {id && <h3>id: {id}</h3>}
      {usename && <h3> {name}</h3>}
      {description && <h3> {description}</h3>}
      {admin && (
        <Button
          variant="contained"
          component={Link}
          color="primary"
          to={`/admin/videos/${id}`}
        >
          Edit
        </Button>
      )}
    </div>
  );
}

export default VideoCard;
