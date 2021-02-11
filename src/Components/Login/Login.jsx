import React, { useContext, useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { UserContext } from "../../Context/UserContext";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Login({ member, setMember }) {
  let history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    console.log("onSubmit");
    e.preventDefault();
    const email = user.email;
    const password = user.password;

    if (email && password) {
      axios
        .post(
          `${process.env.REACT_APP_API_BDD}users/login`,
          {
            email,
            password,
          },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((res) => res.data)
        .then((data) => {
          localStorage.setItem("ID", data.user.id);
          localStorage.setItem("TOKEN", data.token);
          setOpen(true);
          setError(false);
          setTimeout(() => {
            history.push("/exploring");
          }, 500);
        })
        .catch((err) => console.log(err.response.data.errormessage));
    } else {
      setOpen(true);
      setError(true);
    }
  };

  const onClick = () => {
    setMember(true);
  };

  return (
    <div className={styles.Login_wrapper}>
      <form className={styles.Login_form_container}>
        <div className={styles.Login_label_container}>
          <label htmlFor="email">
            Email:
            <input
              className={styles.Login_input}
              type="text"
              name="email"
              placeholder="email@mail.com"
              value={user.email}
              onChange={(e) => onChange(e)}
            />
          </label>
        </div>
        <div className={styles.Login_label_container}>
          <label htmlFor="password *">
            Mot de passe:
            <input
              className={styles.Login_input}
              type="password"
              name="password"
              placeholder="********"
              value={user.password}
              onChange={(e) => onChange(e)}
            />
          </label>
        </div>
        <label htmlFor="button">
          <input
            className={styles.Login_button}
            type="submit"
            name="button"
            value="Connexion"
            onClick={(e) => onSubmit(e)}
          ></input>
        </label>
      </form>

      <div>
        <Link to="/signup" onClick={onClick}>
          <p>Vous n'avez pas de compte?</p>
        </Link>
      </div>
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
            ? "📝 Veuillez compléter tous les champs!"
            : "✅ Connexion réussie!"}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;

Login.propTypes = {
  member: PropTypes.bool.isRequired,
  setMember: PropTypes.func.isRequired,
};
