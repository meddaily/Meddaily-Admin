import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "./Login";

import Login from "../DistributorLogin/DisLogin";

export default function Routerpage() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/distributordashboard" component={DistDashboard} /> */}
        </Switch>
      </Router>
    </>
  );
}
