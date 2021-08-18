import React from "react";
import "./TeamCard.css";

// Show information about a team member
//
// Is rendered by TeamList to show a "card" for each team member.
//
// TeamList -> TeamCard
//

function TeamCard({ name, title, bio, img }) {
  console.debug("TeamCard", img);

  return (
    <div>
      {img && <img src={img} alt={name} />}
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default TeamCard;
