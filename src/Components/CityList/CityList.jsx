import axios from "axios";
import React, { useContext } from "react";
import { CitiesContext } from "../../Context/CitiesContext";

import styles from "./CityList.module.css";

function CityList() {
  const { cities } = useContext(CitiesContext);

  const deleteCity = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_BDD}cities/${id}`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("TOKEN")}`,
        },
      })
      .then((res) => res.data)
      .then((res) => {
        alert("ville supprimée avec succès !");
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <div className={styles.citylist_container}>
      {cities.map((city) => (
        <div
          key={city.id}
          index={city.id}
          className={styles.cityListEl_wrapper}
        >
          <p className={styles.citylist_p}>Pays: {city.country_name}</p>
          <p className={styles.citylist_p}>Ville: {city.city_name}</p>
          <p className={styles.citylist_p}>
            Dernière visite: {city.last_visited}
          </p>
          <p className={styles.citylist_p}>
            Nombre de visite: {city.nb_visited}
          </p>
          <button type="button" onClick={() => deleteCity(city.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default CityList;
