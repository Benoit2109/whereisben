import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AddCity from "../AddCity/AddCity";
import MainLayout from "../Layout/mainLayout";
import Exploring from "../Views/Exploring/Exploring";
import Homepage from "../Views/Homepage/Homepage";


const Root = () => (
  <Router>
    <Switch>
      <MainLayout exact path='/' component={Homepage} />
      <MainLayout exact path='/exploring' component={Exploring} />
      <MainLayout exact path='/addCity' component={AddCity} />
    </Switch>
  </Router>
);

export default Root;
