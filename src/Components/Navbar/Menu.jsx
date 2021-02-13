import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

import globe from "../../Assets/globe_menu.png";
import globeConnected from "../../Assets/globeGreen_menu.png";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export default function Menu() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setActive(!active);
  };

  const deconnect = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ID");
    localStorage.removeItem("FIRSTNAME");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div className={styles.menuWrapper}>
      <button type="button" className={styles.menuButton} onClick={openMenu}>
        <img
          className={styles.menuGlobe}
          src={localStorage.getItem("TOKEN") ? globeConnected : globe}
          alt="globe"
        />
      </button>
      <ul className={`${styles.menuList} ${active && styles.menuOpen}`}>
        <li className={styles.menuListItem} onClick={openMenu}>
          <Link className={styles.menuLink} to="/">
            <strong>Homepage</strong>
          </Link>
        </li>
        <li className={styles.menuListItem} onClick={openMenu}>
          <Link className={styles.menuLink} to="/exploring">
            <strong>Exploring cities</strong>
          </Link>
        </li>
        <li className={styles.menuListItem} onClick={openMenu}>
          <Link className={styles.menuLink} to="/login">
            {localStorage.getItem("TOKEN") ? (
              <p className={styles.menuP} onClick={() => deconnect()}>
                <strong>Deconnexion</strong>
              </p>
            ) : (
              <strong>Connexion / Inscription</strong>
            )}
          </Link>
        </li>
        {localStorage.getItem("TOKEN") ? (
          <li className={styles.menuListItem} onClick={openMenu}>
            <Link className={styles.menuLink} to="/addcity">
              <strong>Add new city</strong>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {"🚨 Vous êtes déconnecté."}
        </Alert>
      </Snackbar>
    </div>
  );
}
