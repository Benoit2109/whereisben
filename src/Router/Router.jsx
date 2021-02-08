import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainLayout from "../Components/Layout/mainLayout";
import AdminPanel from "../Components/Views/AdminPanel/AdminPanel";
import Connexion from "../Components/Views/Connexion/Connexion";
import Exploring from "../Components/Views/Exploring/Exploring";
import Homepage from "../Components/Views/Homepage/Homepage";


const Root = () => (
  <Router>
    <Switch>
      <MainLayout exact path='/' component={Homepage} />
      <MainLayout exact path='/exploring' component={Exploring} />
      <MainLayout exact path='/addcity' component={AdminPanel} />
      <MainLayout exact path='/login' component={Connexion} />
      <MainLayout exact path='/signup' component={Connexion} />
    </Switch>
  </Router>
);

export default Root;
