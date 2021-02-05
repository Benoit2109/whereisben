import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

import styles from "./Autocomplete.module.css";


function Autocomplete({ newcity, setNewcity }) {
  // je destructure mon object newCity reçu en props pour réupérer le nom et la ville à rechercher.
  const { city_name, country_name } = newcity;

  // je formate les données à recevoir pour facilement trouver une ville à la frappe en query.
  const country = country_name.toLowerCase().split(" ").join("+");
  const city = city_name.toLowerCase().split(" ").join("+");
  const Url = "https://nominatim.openstreetmap.org/search?";

  // j'insère dans mon url les données de pays et de ville récupérer dans mes champs input.
  // au click, si j'ai un resultat, je récupère les données de latitude et longitude.
  const fetchCity = () => {
    axios
      .get(`${Url}q=${country},+${city}&format=geojson`)
      .then((res) => res.data.features[0])
      .then((res) => {
        if ( res.geometry && res.geometry.coordinates.length > 0) {
          setNewcity({...newcity, 
            latitude: res.geometry.coordinates[1],
            longitude: res.geometry.coordinates[0],
          });
        } else {
          console.error(res)
          displayError();
        }
      });
  };

  // j'informe l'utilisateur s'il n'a pas renseigné les données de la bon façon.
  const displayError = () => {
    alert(
      "Veuillez préciser votre recherche en respectant les règles d'écriture"
    );
  };

  return (
    <div>
      <button
        disabled={country && city ? false : true}
        className={styles.auto_button}
        type="button"
        onClick={fetchCity}
      >
        Rechercher
      </button>
    </div>
  );
}

export default Autocomplete;

Autocomplete.propTypes = {
  newcity: PropTypes.object.isRequired,
  setNewcity: PropTypes.func.isRequired,
};
