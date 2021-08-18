import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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
      <div>
        <h3>Forging Our Own Path</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Libero at voluptate
          officiis sed atque, ipsam quod est dicta veritatis eaque aut, sequi
          sapiente veniam eveniet aliquid totam? Labore, hic! Laboriosam!
        </p>
      </div>
      <div>
        <h5>Who We Are</h5>
        <h3>The Team Behind AlignYourCulture</h3>
        {team.map((m) => (
          <TeamCard
            key={m.name}
            name={m.name}
            title={m.title}
            bio={m.bio}
            img={m.img}
          />
        ))}
      </div>
      <div>
        <h3>Our results speak for themselves</h3>
        <h1>Get in Touch To see How We Can Help</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio saepe
          alias explicabo dignissimos doloribus consequuntur et eum sit?
          Corrupti, excepturi!
        </p>
        <Button
          variant="contained"
          component={Link}
          color="primary"
          to="/contact"
        >
          Send a Message
        </Button>
      </div>
    </div>
  );
}

export default TeamList;
