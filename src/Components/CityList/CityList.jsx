import axios from "axios";
import React, { useContext, useState } from "react";
import { CitiesContext } from "../../Context/CitiesContext";

import styles from "./CityList.module.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function CityList() {
  const { cities } = useContext(CitiesContext);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const deleteCity = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_BDD}cities/${id}`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("TOKEN")}`, "Access-Control-Allow-Origin": "https://wherethehellisben.netlify.app/addcity"
        },
      })
      .then((res) => res.data)
      .then((res) => {
        setOpen(true);
        setError(false);
      })
      .catch((e) => {
        setOpen(true);
        setError(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <div className={styles.citylist_container}>
      {cities.map((city) => (
        <div
          key={city.id}
          index={city.id}
          className={styles.cityListEl_wrapper}
        >
          <p className={styles.citylist_p}>Pays: {city.country_name}</p>
          <p className={styles.citylist_p}>Ville: {city.city_name}</p>
          <p className={styles.citylist_p}>
            Dernière visite: {city.last_visited}
          </p>
          <p className={styles.citylist_p}>
            Nombre de visite: {city.nb_visited}
          </p>
          <button type="button" onClick={() => deleteCity(city.id)}>
            X
          </button>
        </div>
      ))}
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
            ? "une erreur s'est produite..."
            : "🗑 Ville supprimée avec succès!"}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CityList;
