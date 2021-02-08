import React from "react";

import styles from "./Vignettes.module.css";

import cityPropType from "../../propTypes/CityProptypes";

export default function Vignettes({ city }) {

  const capitalizeFirstLetters = (input) =>
  input.length > 0
    ? input
        .split(" ")
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(" ")
    : "";

    const City = capitalizeFirstLetters(city.city_name);
    const Country = capitalizeFirstLetters(city.country_name)
  return (
    <div className={styles.vignettesWrapper}>
      <div className={styles.vignetteContainer} key={city.id}>
        <img
          className={styles.vignetteIllustration}
          src={`${process.env.REACT_APP_API_BDD}${city.photo}`}
          alt={city.city_name}
        />
        <div className={styles.vignetteInfos}>
          <p>
            <strong>Pays:</strong> {Country}
          </p>
          <p>
            <strong>Ville visitée: </strong>
            {City}
          </p>
          <p>
            <strong>Dernière visite:</strong> {city.last_visited}
          </p>
          <p>
            <strong>Nombre de visites:</strong> {city.nb_visited}
          </p>
        </div>
      </div>
    </div>
  );
}

Vignettes.propTypes = cityPropType;
