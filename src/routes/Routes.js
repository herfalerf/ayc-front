import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import AdminForm from "../auth/AdminForm";
import VideoList from "../videos/VideoList";
import TeamCard from "../team/TeamCard";

// Site-wide routes.
//
// Parts of site shold be visitable when logged in.  Those routes are wrapped by <PrivateRoute>, which is an authorization component.
//
// Visiting a non-existant route redirects to the homepage
//

function Routes({ login }) {
  console.debug("Routes", `login=${typeof login}`);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/methods"></Route>

        <Route exact path="/services"></Route>

        <Route exact path="/resources">
          <VideoList />
        </Route>

        <Route exact path="/about">
          <TeamCard
            name="Timmy Jimmy"
            bio="Big man with a plan."
            img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <TeamCard name="Ramen" bio="Best Cat Girl" />
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
