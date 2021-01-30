import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import VideoPlayer from "../VideoPlayer";


const Root = () => (
  <Router>
    <Switch>
      <MainLayout exact path='/' component={VideoPlayer} />
    </Switch>
  </Router>
);

export default Root;
