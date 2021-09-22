import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AycApi from "../api/api";
import TeamList from "./TeamList";
import LoadingSpinner from "../common/LoadingSpinner";

// Show page with list of team members with buttons to add/edit/delete team members
//
// On Mount, loads team members from API.
//
// This is routed at /admin/team
//
// Routes -> { TeamManager }
//

const useStyles = makeStyles((theme) => ({
  teamMember: {
    padding: theme.spacing(2),
  },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/admin-home/admin-home01.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    minHeight: "25vh",
  },
  teamHeader: {
    padding: theme.spacing(2),
  },
}));

const TeamManager = () => {
  console.debug("TeamManager");

  const classes = useStyles();

  const [team, setTeam] = useState(null);

  useEffect(() => {
    async function getTeamOnMount() {
      console.debug("TeamManager useEffect getTeamOnMount");
      let team = await AycApi.getTeam();
      setTeam(team);
    }
    getTeamOnMount();
  }, []);
  if (!team) return <LoadingSpinner />;
  console.debug(team, "team=typeof", typeof team);

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid container justifycontent="center" className={classes.teamHeader}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Team Manager
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            Here you can add, edit, or delete team members
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Button
              variant="contained"
              component={Link}
              color="primary"
              to="/admin/team/add"
            >
              Add A New Team Member
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <TeamList admin="true" />
    </div>
  );
};

export default TeamManager;
