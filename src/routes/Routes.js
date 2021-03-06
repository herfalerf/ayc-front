import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import AdminHome from "../homepage/AdminHome";
import AdminForm from "../auth/AdminForm";
import VideoLibrary from "../videos/VideoLibrary";
import VideoManager from "../videos/VideoManager";
import VideoForm from "../videos/VideoForm";
import VideoEditForm from "../videos/VideoEditForm";
import About from "../team/About";
import TeamManager from "../team/TeamManager";
import TeamForm from "../team/TeamForm";
import TeamEditForm from "../team/TeamEditForm";
import Contactpage from "../contact/Contactpage";
import Services from "../services/Services";
import Methods from "../methods/Methods";
import CustomerManager from "../customers/CustomerManager";
import CustomerForm from "../customers/CustomerForm";
import CustomerEditForm from "../customers/CustomerEditForm";
import PrivateRoute from "./PrivateRoute";

// Site-wide routes.
//
// Parts of site shold be visitable when logged in.  Those routes are wrapped by <PrivateRoute>, which is an authorization component.
//
// Visiting a non-existant route redirects to the homepage
//

function Routes({
  login,
  addCustomer,
  addMember,
  editMember,
  deleteMember,
  editCustomer,
  deleteCustomer,
  addVideo,
  editVideo,
  deleteVideo,
  tagVideo,
  untagVideo,
  service,
  setService,
}) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `addCustomer=${typeof addCustomer}`,
    `addMember=${typeof addMember}`,
    `editMember=${typeof editMember}`,
    `deleteMember=${typeof deleteMember}`,
    `addVideo=${typeof addVideo}`,
    `deleteVideo=${typeof deleteVideo}`,
    `tagVideo=${typeof tagVideo}`,
    `unTagVideo=${typeof untagVideo}`
  );

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage addCustomer={addCustomer} setService={setService} />
        </Route>
        <Route exact path="/methods">
          <Methods />
        </Route>
        <Route exact path="/services">
          <Services service={service} setService={setService} />
        </Route>
        <Route exact path="/resources">
          <VideoLibrary />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contactpage addCustomer={addCustomer} />
        </Route>
        <Route exact path="/admin">
          <AdminForm login={login} />
        </Route>

        <PrivateRoute exact path="/admin/home">
          <AdminHome />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/team">
          <TeamManager />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/team/add">
          <TeamForm addMember={addMember} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/team/:id">
          <TeamEditForm editMember={editMember} deleteMember={deleteMember} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/customers">
          <CustomerManager />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/customers/add">
          <CustomerForm addCustomer={addCustomer} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/customers/:id">
          <CustomerEditForm
            editCustomer={editCustomer}
            deleteCustomer={deleteCustomer}
          />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/videos">
          <VideoManager usename="true" />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/videos/add">
          <VideoForm addVideo={addVideo} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/videos/:id">
          <VideoEditForm
            editVideo={editVideo}
            deleteVideo={deleteVideo}
            tagVideo={tagVideo}
            untagVideo={untagVideo}
          />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
