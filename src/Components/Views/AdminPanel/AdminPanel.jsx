import React, { useState } from "react";

import styles from "./AdminPanel.module.css";

import AddCity from "../../AddCity/AddCity";
import Autocomplete from "../../Autocomplete/Autocomplete";
import CityList from "../../CityList/CityList";

function AdminPanel() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [newcity, setNewcity] = useState({
    country_name: "",
    city_name: "",
    latitude: latitude,
    longitude: longitude,
    photo: "",
    last_visited: "",
    nb_visited: "",
  });

  return (
    <div className={styles.adminpanel_wrapper}>
      <AddCity
        latitude={latitude}
        setLatitude={setLatitude}
        longitude={longitude}
        setLongitude={setLongitude}
        newcity={newcity}
        setNewcity={setNewcity}
      />
      <Autocomplete
        className={styles.Admin_Fetch_button}
        newcity={newcity}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        latitude={latitude}
        longitude={longitude}
      />
      <CityList />
    </div>
  );
}

export default AdminPanel;
