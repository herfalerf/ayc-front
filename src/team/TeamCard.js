import React from "react";
import "./TeamCard.css";

// Show information about a team member
//
// Is rendered by TeamList to show a "card" for each team member.
//
// TeamList -> TeamCard
//

function TeamCard({ name, bio, img }) {
  console.debug("TeamCard", img);

  return (
    <div>
      {img && <img src={img} alt={name} />}
      <h6>{name}</h6>
      <p>{bio}</p>
    </div>
  );
}

export default TeamCard;
