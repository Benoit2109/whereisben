import React from "react";
import PropTypes from 'prop-types';
import styles from "./SearchBar.module.css";

function SearchBar({citysearch, setCitysearch}) {
  

   

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

export default SearchBar;

SearchBar.propTypes ={
  citysearch: PropTypes.arrayOf(PropTypes.object).isRequired,
}
