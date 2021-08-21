import React from "react";
import "./TeamCard.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Show information about a team member
//
// Is rendered by TeamList to show a "card" for each team member.
//
// TeamList -> TeamCard
//

function TeamCard({ id, name, title, bio, img, admin }) {
  console.debug("TeamCard", `MemberId=${id}`, `MemberName=${name}`);

  return (
    <div>
      {img && <img src={img} alt={name} />}
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{bio}</p>
      {admin && (
        <Button
          variant="contained"
          component={Link}
          color="primary"
          to={`/admin/team/${id}`}
        >
          Edit
        </Button>
      )}
    </div>
  );
}

export default TeamCard;
