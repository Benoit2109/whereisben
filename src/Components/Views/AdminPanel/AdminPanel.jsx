import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';

import styles from "./AdminPanel.module.css";

import AddCity from "../../AddCity/AddCity";
import Autocomplete from "../../Autocomplete/Autocomplete";
import CityList from "../../CityList/CityList";
import { CitiesContext } from "../../Context/CitiesContext";

function AdminPanel() {
  const { setCities} = useContext(CitiesContext)
  // state qui me permet de récupérer les informations d'une nouvelle ville.
  const [newcity, setNewcity] = useState({
    country_name: "",
    city_name: "",
    latitude: "",
    longitude: "",
    photo: "",
    last_visited: "",
    nb_visited: "",
  });
  // je rafraichi mon contexte en rappelant l'api lorsque la liste des villes est actualisée.
  const id = localStorage.getItem("ID");
    useEffect(() => {
       id && axios
          .get(`${process.env.REACT_APP_API_BDD}cities/user/${id}`)
          .then((res) => res.data)
          .then((res) => {
            setCities(res);
          });
      }, []);

  return (
    <div className={styles.adminpanel_container}>
      <div className={styles.adminpanel_wrapper}>
      <AddCity newcity={newcity} setNewcity={setNewcity} />
      <Autocomplete
        className={styles.Admin_Fetch_button}
        newcity={newcity}
        setNewcity={setNewcity}
      />
      </div>
      <div className={styles.Admin_citylist}>
      <CityList />
      </div>
    </div>
  );
}

export default AdminPanel;
