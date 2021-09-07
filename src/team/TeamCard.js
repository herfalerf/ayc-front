import React from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Show information about a team member
//
// Is rendered by TeamList to show a "card" for each team member.
//
// TeamList -> TeamCard
//

const useStyles = makeStyles((theme) => ({
  image: {
    height: 0,
    paddingTop: "100%",
  },
}));

function TeamCard({ id, name, title, bio, img, admin }) {
  console.debug("TeamCard", `MemberId=${id}`, `MemberName=${name}`);

  const classes = useStyles();

  return (
    <div>
      <Card>
        {img && (
          <CardMedia className={classes.image} image={img} title={name} />
        )}

        <CardHeader title={name} subheader={title}></CardHeader>
        <CardContent>
          <Typography variant="body2" component="p">
            {bio}
          </Typography>
        </CardContent>
        {admin && (
          <CardActions>
            <Button
              variant="contained"
              component={Link}
              color="primary"
              to={`/admin/team/${id}`}
            >
              Edit
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
}

export default TeamCard;
