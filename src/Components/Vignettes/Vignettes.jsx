import React, { useContext } from "react";

import styles from "./Vignettes.module.css";
import { CitiesContext } from "../Context/CitiesContext";
import cityPropType from "../propTypes/CityProptypes";

export default function Vignettes({ city }) {
  const { cities } = useContext(CitiesContext);
  const {
    city_name,
    country_name,
    photo,
    nb_visited,
    last_visited,
  } = city;

  return (
    <div className={styles.vignettesWrapper}>
      {cities.length > 0 ? (
        cities.map((city, id) => (
          <div className={styles.vignetteContainer} key={id}>
            <img
              className={styles.vignetteIllustration}
              src={photo}
              alt={city_name}
            />
            <div className={styles.vignetteInfos}>
              <p>
                <strong>Pays:</strong> {country_name}
              </p>
              <p>
                <strong>Ville visitée: </strong>
                {city_name}
              </p>
              <p>
                <strong>Dernière visite:</strong> {last_visited}
              </p>
              <p>
                <strong>Nombre de visites:</strong> {nb_visited}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.filterError}>
          nous n'avons pas trouvé de ville(s) correspondant à votre recherche.
        </p>
      )}
    </div>
  );
}

Vignettes.propTypes = cityPropType;
