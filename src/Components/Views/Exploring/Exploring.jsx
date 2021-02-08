import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CitiesContext } from "../../Context/CitiesContext";
import Map from "../../Map/Map";
import SearchBar from "../../SearchBar/SearchBar";
import Vignettes from "../../Vignettes/Vignettes";
import styles from "./Exploring.module.css";

export default function Exploring() {
  const [citysearch, setCitysearch] = useState("");
  const { setCities } = useContext(CitiesContext);
  const [cityLoop, setcityLoop] = useState([]);

  const id = localStorage.getItem("ID");
    useEffect(() => {
       id && axios
          .get(`${process.env.REACT_APP_API_BDD}cities/user/${id}`)
          .then((res) => res.data)
          .then((res) => {
            setcityLoop(res);
            setCities(res);
            console.log(res);
          });
      }, []);
      

  const FilterCity = cityLoop
    .filter(
      (e) =>
        e.city_name.includes(citysearch) || e.country_name.includes(citysearch)
    )
    .map((city) => <Vignettes key={city.id} city={city} />);

  

  return (
    <div className={styles.exploringdisplay}>
      <Map cityLoop={cityLoop} citysearch={citysearch}/>
      <div className={styles.exploringcenter}>
        <SearchBar citysearch={citysearch} setCitysearch={setCitysearch} />
        <div className={styles.exploring_vignettes_wrapper}>
        {FilterCity.length > 0 ? (
          FilterCity
        ) : (
          <p className={styles.nocities}>
            Nous n'avons pas trouvé de ville(s) correspondant à votre recherche.
          </p>
        )}
        </div>
      </div>
    </div>
  );
}
