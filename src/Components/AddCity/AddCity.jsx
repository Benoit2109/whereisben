import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./AddCity.module.css";
import { Link } from "react-router-dom";

export default function AddCity({
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  newcity,
  setNewcity,
}) {
  const onChange = (e) => {
    setNewcity({ ...newcity, [e.target.name]: e.target.value });
  };

  const onSubmit=(e)=> {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_BDD}cities/newcity`, newcity)
      .then((res) => res.data)
      .then((res) => {
        alert("La ville à bien été ajouté !");
      })
      .catch((e) => {
        console.error(e.message);
      });
  }

  return (
    <div className={styles.addcityWrapper}>
      <div className={styles.addcityformContainer}>
        <form className={styles.addcityform}>
          <label htmlFor="country_name">
            Pays:
            <input
              className={styles.addcityformInput}
              type="text"
              name="country_name"
              placeholder="Nom du pays"
              value={newcity.country_name}
              onChange={onChange}
            />
          </label>
          <label htmlFor="city_name">
            Ville visitée:
            <input
              className={styles.addcityformInput}
              type="text"
              name="city_name"
              placeholder="Nom de la ville"
              value={newcity.city_name}
              onChange={onChange}
            />
          </label>
          <label htmlFor="latitude">
            <input
              className={styles.addcityformInput}
              type="text"
              name="latitude"
              placeholder="Latitude"
              value={latitude}
              onChange={onChange}
            />
          </label>
          <label htmlFor="longitude">
            <input
              className={styles.addcityformInput}
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={longitude}
              onChange={onChange}
            />
          </label>
          <label htmlFor="photo">
            Photo:
            <input
              className={styles.addcityformInput}
              type="file"
              accept="image/*"
              name="photo"
              placeholder="Url de la photo"
              value={newcity.photo}
              onChange={onChange}
            />
          </label>
          <label htmlFor="last_visited">
            Dernière visite:
            <input
              className={styles.addcityformInput}
              type="number"
              name="last_visited"
              placeholder="ex: 2017"
              value={newcity.last_visited}
              onChange={onChange}
            />
          </label>
          <label htmlFor="nb_visited">
            Nbre de visites:
            <input
              className={styles.addcityformInput}
              type="number"
              name="nb_visited"
              placeholder="ex: 5"
              value={newcity.times_visited}
              onChange={onChange}
            />
          </label>

          <label htmlFor="submit" className={styles.addcitybuttoncontainer}>
            <input
              type="submit"
              name="submmit"
              onClick={(e) => onSubmit(e)}
              value="Envoyer"
              className={styles.addcitybutton}
            />
          </label>
        </form>
      </div>
      <Link to="/exploring" className={styles.addcityviewButtoncontainer}>
        <button className={styles.addcityviewButton}>
          Afficher sur la carte
        </button>
      </Link>
    </div>
  );
}

AddCity.Proptype = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  setLongitude: PropTypes.func.isRequired,
  setLatitude: PropTypes.func.isRequired,
  newcity: PropTypes.object.isRequired,
  setNewcity: PropTypes.func.isRequired,
};
