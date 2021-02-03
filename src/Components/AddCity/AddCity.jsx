import React, { useState } from "react";
import axios from "axios";
import styles from "./AddCity.module.css";
import { Link } from "react-router-dom";
import Autocomplete from "../Autocomplete/Autocomplete";

export default function AddCity() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [newcity, setNewcity] = useState({
    country_name: "",
    city_name: "",
    latitude: "",
    longitude: "",
    photo: "",
    last_visited: "",
    nb_visited: "",
  });

  const onChangecity = (e) => {
    setNewcity({ ...newcity, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_BDD}/cities/newcity`, newcity)
      .then((res) => res.data)
      .then((res) => {
        alert("La ville à bien été ajouté!");
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

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
              onChange={onChangecity}
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
              onChange={onChangecity}
            />
          </label>
          <label htmlFor="latitude">
            <input
              className={styles.addcityformInput}
              type="text"
              name="latitude"
              placeholder="Latitude"
              value={latitude}
              onChange={onChangecity}
            />
          </label>
          <label htmlFor="longitude">
            <input
              className={styles.addcityformInput}
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={longitude}
              onChange={onChangecity}
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
              onChange={onChangecity}
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
              onChange={onChangecity}
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
              onChange={onChangecity}
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
      <Autocomplete
          newcity={newcity}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          latitude={latitude}
          longitude={longitude}
        />
      <Link to="/exploring" className={styles.addcityviewButtoncontainer}>
        <button className={styles.addcityviewButton}>
          Afficher sur la carte
        </button>
      </Link>
    </div>
  );
}
