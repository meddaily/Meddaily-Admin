import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// admin login
import Login from "./Login";
// dis login
import DistLogin from "../DistributorLogin/DisLogin";

export default function Routerpage() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
    <Redirect to="/login" />
     </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/distributorlogin" component={DistLogin} />
        </Switch>
      </Router>
    </>
  );
}
