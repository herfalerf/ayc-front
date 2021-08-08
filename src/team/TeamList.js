import React, { useState, useEffect } from "react";
import AycApi from "../api/api";
import TeamCard from "./TeamCard";
import LoadingSpinner from "../common/LoadingSpinner";

// Show page with list of team members
//
// On Mount, loads team members from API.
//
// This is routed at /team
//
// Routes -> { TeamCard }
//

function TeamList() {
  console.debug("TeamList");

  const [team, setTeam] = useState(null);

  //   useEffect(async function getTeamOnMount() {
  //     console.debug("TeamList useEffect getTeamOnMount");
  //     let team = await AycApi.getTeam();
  //     setTeam(team);
  //   }, []);

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
    <div>
      {team.map((m) => (
        <TeamCard key={m.name} name={m.name} bio={m.bio} img={m.img} />
      ))}
    </div>
  );
}

export default TeamList;
