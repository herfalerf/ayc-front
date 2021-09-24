import React from "react";
import { Button, Card, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
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
    // paddingTop: "56.25%",
    paddingBottom: "56.25%",
    overflow: "hidden",
    height: 0,
  },
  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0",
  },
  videoResponsive: {
    left: "0",
    top: "0",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
}));

function VideoCard({
  id,
  link,
  name,
  description,
  usename,
  usedescription,
  useid,
  admin,
}) {
  console.debug("VideoCard", link);

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.playerWrapper}>
        {/* <ReactPlayer
          config={{
            youtube: {
              playerVars: { controls: 1, rel: 0, modestbranding: 1 },
            },
          }}
          url={link}
          className={classes.reactPlayer}
          width="100%"
          height="100%"
        /> */}
        {/* <div className="video-responsive"> */}
        <iframe
          className={classes.videoResponsive}
          width="853"
          height="480"
          src={link}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        {/* </div> */}
      </Card>

      {useid && <Typography variant="subtitle2">id: {id}</Typography>}
      {usename && <Typography variant="subtitle1"> {name}</Typography>}
      {usedescription && (
        <Typography variant="subtitle2"> {description}</Typography>
      )}
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
