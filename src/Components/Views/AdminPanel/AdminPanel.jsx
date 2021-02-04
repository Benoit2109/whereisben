import React, { useState } from "react";

import styles from "./AdminPanel.module.css";

import AddCity from "../../AddCity/AddCity";
import Autocomplete from "../../Autocomplete/Autocomplete";
import CityList from "../../CityList/CityList";

function AdminPanel() {
  const [newcity, setNewcity] = useState({
    country_name: "",
    city_name: "",
    latitude: "",
    longitude: "",
    photo: "",
    last_visited: "",
    nb_visited: "",
  });

  return (
    <div className={styles.adminpanel_wrapper}>
      <AddCity newcity={newcity} setNewcity={setNewcity} />
      <Autocomplete
        className={styles.Admin_Fetch_button}
        newcity={newcity}
        setNewcity={setNewcity}
      />
      <CityList />
    </div>
  );
}

export default AdminPanel;
