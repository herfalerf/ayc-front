import React, { useState, useEffect } from "react";
import ContactElement from "../contact/ContactElement";
import AycApi from "../api/api";
import TeamCard from "./TeamCard";
import LoadingSpinner from "../common/LoadingSpinner";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Icon } from "@material-ui/core";
import ic_logomark from "../common/images/ic_logomark.svg";
import ic_about_curiosity from "../common/images/ic_about_curiosity.svg";
import ic_about_positivity from "../common/images/ic_about_positivity.svg";
import ic_about_sharing from "../common/images/ic_about_sharing.svg";
import ic_about_simplicity from "../common/images/ic_about_simplicity.svg";

// Show page with list of team members
//
// On Mount, loads team members from API.
//
// This is routed at /team
//
// Routes -> { TeamCard }
//

const useStyles = makeStyles((theme) => ({
  teamBox: {
    backgroundColor: "rgb(244,245,248)",
    padding: theme.spacing(4),
  },
  teamMember: {
    padding: theme.spacing(2),
  },
}));

function TeamList({ admin }) {
  console.debug("TeamList");

  const classes = useStyles();

  const [team, setTeam] = useState(null);

  useEffect(() => {
    async function getTeamOnMount() {
      console.debug("TeamList useEffect getTeamOnMount");
      let team = await AycApi.getTeam();
      setTeam(team);
    }
    getTeamOnMount();
  }, []);
  if (!team) return <LoadingSpinner />;
  console.debug(team);

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      alignItems="flex-start"
    >
      {team.map((m) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={classes.teamMember}
          key={m.name}
        >
          <TeamCard
            id={m.id}
            name={m.name}
            title={m.title}
            bio={m.bio}
            img={m.img}
            admin={admin}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default TeamList;
