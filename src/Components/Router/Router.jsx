import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Map from "../Map";
import VideoPlayer from "../VideoPlayer";


const Root = () => (
  <Router>
    <Switch>
      <MainLayout exact path='/' component={VideoPlayer} />
      <MainLayout exact path='/exploring' component={Map} />
    </Switch>
  </Router>
);

export default Root;
