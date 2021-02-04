import React from "react";

import styles from "./Vignettes.module.css";

import cityPropType from "../propTypes/CityProptypes";

export default function Vignettes({ city }) {
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
            <strong>Pays:</strong> {city.country_name}
          </p>
          <p>
            <strong>Ville visitée: </strong>
            {city.city_name}
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
