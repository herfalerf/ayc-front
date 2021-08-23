import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AycApi from "../api/api";
import TeamCard from "./TeamCard";
import LoadingSpinner from "../common/LoadingSpinner";

// Show page with list of team members with buttons to add/edit/delete team members
//
// On Mount, loads team members from API.
//
// This is routed at /admin/team
//
// Routes -> { TeamManager }
//

const TeamManager = () => {
  console.debug("TeamManager");

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
      <div>
        {team.map((m) => (
          <TeamCard
            id={m.id}
            key={m.name}
            name={m.name}
            title={m.title}
            bio={m.bio}
            img={m.img}
            admin="true"
          />
        ))}
      </div>
    </div>
  );
};

export default TeamManager;
