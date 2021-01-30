import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Exploring from "../Views/Exploring/Exploring";
import Homepage from "../Views/Homepage/Homepage";


const Root = () => (
  <Router>
    <Switch>
      <MainLayout exact path='/' component={Homepage} />
      <MainLayout exact path='/exploring' component={Exploring} />
    </Switch>
  </Router>
);

export default Root;
