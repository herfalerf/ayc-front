import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
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
      <h1>Team Manager</h1>
      <p>Here you can add, edit, or delete team members</p>
      <Button
        variant="contained"
        component={Link}
        color="primary"
        to="/admin/team/add"
      >
        Add A New Team Member
      </Button>
      <TeamList admin="true" />
    </div>
  );
};

export default TeamManager;
