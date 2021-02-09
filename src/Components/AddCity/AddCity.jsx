import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./AddCity.module.css";
import { Link } from "react-router-dom";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export default function AddCity({ newcity, setNewcity }) {
  const userId = localStorage.getItem("ID");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  // je récupère le fichier image contenu dans l'input type file.
  // je l'insère dans l'objet Newcity.
  const onchangePhoto = (e) => {
    if (e.target.files[0]) {
      setNewcity({ ...newcity, [e.target.name]: e.target.files[0] });
    } else {
      setNewcity({ ...newcity, [e.target.name]: "" });
    }
  };
  // je récupère toutes les valeurs de mes champs pour les insérer dans mon objet newCity.
  const onChange = (e) => {
    setNewcity({ ...newcity, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // je reformate mes données pour les envoyer vers ma base de données et pouvoir récupérer ma photo en type file.
    const data = new FormData();
    data.append("photo", newcity.photo);
    data.append("country_name", newcity.country_name);
    data.append("city_name", newcity.city_name);
    data.append("longitude", newcity.longitude);
    data.append("latitude", newcity.latitude);
    data.append("nb_visited", newcity.nb_visited);
    data.append("last_visited", newcity.last_visited);
    data.append("user_id", userId);

    // j'envoi la ville dans la base de donnée.
    axios
      .post(`${process.env.REACT_APP_API_BDD}cities/newcity`, data, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("TOKEN")}`,
        },
      })
      .then((res) => res.data)
      .then((res) => {
        setOpen(true);
        setError(false);
      })
      .catch((e) => {
        console.error(e.message);
        setOpen(true);
        setError(true);
      });
    // je réinitialise mon objet newCity à null pour ajouter une nouvelle ville.
    setNewcity({
      country_name: "",
      city_name: "",
      latitude: "",
      longitude: "",
      photo: "",
      last_visited: "",
      nb_visited: " ",
    });
  };

  return (
    <div className={styles.addcityWrapper}>
      <div className={styles.addcityformContainer}>
        <form
          className={styles.addcityform}
          action="/newcity"
          method="POST"
          enctype="multipart/form-data"
        >
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
              value={newcity.latitude}
            />
          </label>
          <label htmlFor="longitude">
            <input
              className={styles.addcityformInput}
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={newcity.longitude}
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
              value={newcity.photo.filename}
              onChange={(e) => onchangePhoto(e)}
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
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={error ? "warning" : "success"}>
          {error
            ? "Veuillez compléter tous les champs!"
            : "📬 Ville ajoutée avec succès!"}
        </Alert>
      </Snackbar>
    </div>
  );
}

AddCity.Proptype = {
  newcity: PropTypes.object.isRequired,
  setNewcity: PropTypes.func.isRequired,
};
