import React from "react";
import { SwitchCase, Route, Redirect } from "react-router-dom";

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

        <Route exact path="/resources"></Route>

        <Route exact path="/about"></Route>

        <Route exact path="/login">
          <AdminForm login={login} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
