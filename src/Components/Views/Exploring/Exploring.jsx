import React from "react";
import Map from "../../Map/Map";
import SearchBar from "../../SearchBar/SearchBar";
import Vignettes from "../../Vignettes/Vignettes";
import styles from "./Exploring.module.css";

export default function Exploring() {
  return (
    <div className={styles.exploringdisplay}>
      <Map />
      <div className={styles.exploringcenter}>
        <SearchBar />
        <Vignettes />
      </div>
    </div>
  );
}
