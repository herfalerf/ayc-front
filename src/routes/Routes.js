import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import AdminForm from "../auth/AdminForm";
import VideoList from "../videos/VideoList";
import TeamList from "../team/TeamList";

// Site-wide routes.
//
// Parts of site shold be visitable when logged in.  Those routes are wrapped by <PrivateRoute>, which is an authorization component.
//
// Visiting a non-existant route redirects to the homepage
//

function Routes({ login, addCustomer }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `addCustomer=${typeof addCustomer}`
  );

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage addCustomer={addCustomer} />
        </Route>

        <Route exact path="/methods"></Route>

        <Route exact path="/services"></Route>

        <Route exact path="/resources">
          <VideoList />
        </Route>

        <Route exact path="/about">
          <TeamList />
        </Route>

        <Route exact path="/login">
          <AdminForm login={login} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
