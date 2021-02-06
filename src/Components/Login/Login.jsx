import React, { useContext } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { UserContext } from "../Context/UserContext";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

function Login({member, setMember}) {
  let history= useHistory();
  const { user, setUser } = useContext(UserContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;

    if (email && password) {
      axios
        .post(
          `${process.env.REACT_APP_API_BDD}users/login`,
         { email,
          password}
        )
        .then((res) => res.data)
        .then((data) => {
          localStorage.setItem("TOKEN", data.token);
          alert("logged Successfully");
          history.push('/exploring')
        })
        .catch((err) => console.log(err.response.data.errormessage));
    } else {
      alert("Remplissez tous les champs de connexion");
    }
  };

  const onClick = () => {
    setMember(!member)
  }

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
    </div>
  );
}

export default Login;

Login.propTypes = {
  newcity: PropTypes.bool.isRequired,
  setNewcity: PropTypes.func.isRequired,
};
