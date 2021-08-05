import { div } from "prelude-ls";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Homepage of site.
//
// Routed at /
//
// Routes -> Homepage
//

function Homepage() {
  // const { currentUser } = useContext(UserContext);
  // console.debug("Homepage", "currentUser=", currentUser)

  return (
    <div>
      <h1>This is the homepage</h1>
    </div>
  );
}
