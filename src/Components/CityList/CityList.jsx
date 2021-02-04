import axios from "axios";
import React, { useContext } from "react";
import { CitiesContext } from "../Context/CitiesContext";

import styles from "./CityList.module.css";

function CityList() {
  const { cities } = useContext(CitiesContext);

  const deleteCity = (e, index) => {
    axios
      .delete(`${process.env.REACT_APP_API_BDD}cities/${index.id}`)
      .then((res) => res.data)
      .then((res) => {
        alert("ville supprimée avec succès !");
      })
      .catch((e) => {
          console.error(e.message);
      })
  };

  return (
    <div>
      {cities.map((city) => (
        <div key={city.id} index={city.id} className={styles.cityListEl_wrapper}>
          <p>Pays: {city.country_name}</p>
          <p>Ville: {city.city_name}</p>
          <p>Dernière visite: {city.last_visited}</p>
          <p>Nombre de visite: {city.nb_visited}</p>
          <button type="button" onClick={deleteCity}>
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}

export default CityList;
