import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CitiesContext } from "../../Context/CitiesContext";
import Map from "../../Map/Map";
import SearchBar from "../../SearchBar/SearchBar";
import Vignettes from "../../Vignettes/Vignettes";
import styles from "./Exploring.module.css";

export default function Exploring() {
  const [citysearch, setCitysearch] = useState("");
  const { cities, setCities } = useContext(CitiesContext);
  const [cityLoop, setcityLoop] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BDD}cities`)
      .then((res) => res.data)
      .then((res) => {
        setCities(res);
      });
  }, [setCities]);

  const FilterCity = cityLoop
    .filter(
      (e) =>
        e.city_name.includes(citysearch) || e.country_name.includes(citysearch)
    )
    .map((city) => <Vignettes key={city.id} city={city} />);

  useEffect(() => {
    setcityLoop(cities);
  }, []);

  return (
    <div className={styles.exploringdisplay}>
      <Map />
      <div className={styles.exploringcenter}>
        <SearchBar citysearch={citysearch} setCitysearch={setCitysearch} />
        {FilterCity.length > 0 ? (
          FilterCity
        ) : (
          <p className={styles.nocities}>
            Nous n'avons pas trouvé de ville(s) correspondant à votre recherche.
          </p>
        )}
      </div>
    </div>
  );
}
