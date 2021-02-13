import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../../Context/UserContext";

import styles from "./SignUp.module.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function SignUp({ setMember }) {
  let history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const SignUp = (user) => {
    axios
      .post(`${process.env.REACT_APP_API_BDD}users/newuser`, user)
      .then((res) => res.data)
      .then((data) => {
        setOpen(true);
        setError(false);
        setMember(false);
        setTimeout(()=> {history.push("/login")}, 500);
      });
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    setMember(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.user_name && user.firstname && user.email && user.password) {
      SignUp(user);
    } else {
      setOpen(true);
      setError(true);
    }
  };
  return (
    <div className={styles.Signup_form_container}>
      <form className={styles.Signup_form}>
        <label htmlFor="user_name" className={styles.Signup_label}>
          Nom:
          <input
            className={styles.Signup_input}
            type="text"
            name="user_name"
            placeholder="Nom"
            value={user.user_name}
            onChange={(e) => onChange(e)}
          ></input>
        </label>
        <label htmlFor="firstname" className={styles.Signup_label}>
          Prénom:
          <input
            className={styles.Signup_input}
            type="text"
            name="firstname"
            placeholder="prénom"
            value={user.prénom}
            onChange={(e) => onChange(e)}
          ></input>
        </label>
        <label htmlFor="email" className={styles.Signup_label}>
          email:
          <input
            className={styles.Signup_input}
            type="text"
            name="email"
            placeholder="email@mail.com"
            value={user.email}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label htmlFor="password *" className={styles.Signup_label}>
          Mot de passe:
          <input
            className={styles.Signup_input}
            type="password"
            name="password"
            placeholder="********"
            value={user.password}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label htmlFor="button">
          <input
            className={styles.Signup_button}
            type="submit"
            name="button"
            value="Inscription"
            onClick={(e) => onSubmit(e)}
          ></input>
        </label>
      </form>
      <Link to="/login">
        <p onClick={() => onClick()}>login</p>
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
            : "Inscription réussie! Connectez-vous..."}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SignUp;

SignUp.propTypes = {
  member: PropTypes.bool.isRequired,
  setMember: PropTypes.func.isRequired,
};
