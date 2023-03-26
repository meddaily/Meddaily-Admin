import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";


export default function Routerpage() {
  return (
    <>
      <Router>
          <Switch>
                <Route exact path="/login" component={Login} />
          </Switch>
      </Router>
    </>
  );
}
