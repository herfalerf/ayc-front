import React from "react";
import { Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import IframeResizer from "iframe-resizer-react";
import ReactPlayer from "react-player";
import { classes } from "istanbul-lib-coverage";
import { makeStyles } from "@material-ui/core/styles";
import "./videocard.css";

// Display embedded youtube video
//
// Is rendered by VideoList to a show a "card" for each video.
//
// VideoList -> VideoCard

const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%",
  },
  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0",
  },
}));

function VideoCard({ id, link, name, description, usename, admin }) {
  console.debug("VideoCard", link);

  const classes = useStyles();

  return (
    <Card>
      <div className={classes.playerWrapper}>
        <ReactPlayer
          config={{
            youtube: {
              playerVars: { controls: 1, rel: 0, modestbranding: 1 },
            },
          }}
          url={link}
          className={classes.reactPlayer}
          width="100%"
          height="100%"
        />

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
    </Card>
  );
}

export default VideoCard;
