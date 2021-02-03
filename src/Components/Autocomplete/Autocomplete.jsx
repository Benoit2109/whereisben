import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

import styles from "./Autocomplete.module.css";

function Autocomplete({ newcity, setLatitude, setLongitude }) {
  const { country_name, city_name } = newcity;

  const country = country_name.toLowerCase().split(" ").join("+");
  const city = city_name.toLowerCase().split(" ").join("+");
  const Url = "https://nominatim.openstreetmap.org/search?";

  const fetchCity = () => {
    axios
      .get(`${Url}q=${country},+${city}&format=geojson`)
      .then((res) => res.data.features[0])
      .then((res) => {
        if (
          res.geometry.coordinates[0].length > 0 ||
          res.geometry.coordinates[1].length > 0
        ) {
          setLatitude(res.geometry.coordinates[0]);
          setLongitude(res.geometry.coordinates[1]);
        } else {
          displayError();
        }
      });
  };

  const displayError = () => {
    alert(
      "Veuillez préciser votre recherche en respectant les règles d'écriture"
    );
  };

  return (
    <div>
      <button disabled={country&&city? false : true} className={styles.auto_button} type="button" onClick={fetchCity}>
        Rechercher
      </button>
    </div>
  );
}

export default Autocomplete;

Autocomplete.propTypes = {
  newcity: PropTypes.object.isRequired,
  setLongitude: PropTypes.number.isRequired,
  setLatitude: PropTypes.number.isRequired,
};
