import React, { useState, useContext, useEffect } from "react";
import { CitiesContext } from "../../Context/CitiesContext";
import Map from "../../Map/Map";
import SearchBar from "../../SearchBar/SearchBar";
import Vignettes from "../../Vignettes/Vignettes";
import styles from "./Exploring.module.css";

export default function Exploring() {
  const [citysearch, setCitysearch] = useState("");
  const { cities } = useContext(CitiesContext);
  const [cityLoop, setcityLoop] = useState("");

  useEffect(() => {
    setcityLoop(cities)
  },[])
  return (
    <div className={styles.exploringdisplay}>
      <Map />
      <div className={styles.exploringcenter}>
        <SearchBar citysearch={citysearch} setCitysearch={setCitysearch} />
        {cityLoop.length > 0 ? (
          cityLoop
            .filter(
              (e) =>
                e.city_name.includes(citysearch) ||
                e.country_name.includes(citysearch)
            )
            .map((city, index) => (
              <Vignettes key={city.id} city={city} alt={index} />
            ))
        ) : (
          <p className={styles.nocities}>
            Nous n'avons pas trouvé de ville(s) correspondant à votre recherche.
          </p>
        )}
      </div>
    </div>
  );
}
