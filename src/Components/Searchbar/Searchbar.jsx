import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [citysearch, setCitysearch] = useState("");

  const handleChange = (e) => {
    setCitysearch(e.target.value);
  };

  return (
    <div className={styles.searchbar_wrapper}>
      <label htmlFor="searchcity">
        <input
          type="search"
          className={styles.searchbar}
          value={citysearch}
          onChange={handleChange}
          placeholder="Rechercher un pays ou une ville..."
        />
      </label>
    </div>
  );
}
// j'essaie de faire fonctionner ce composant.

export default SearchBar;
