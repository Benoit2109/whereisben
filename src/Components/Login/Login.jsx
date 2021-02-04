import React, { useContext } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { UserContext } from "../Context/UserContext";

function Login() {
  const { user, setUser } = useContext(UserContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      axios
        .post(
          `${process.env.REACT_APP_API_BDD}users/login`,
          user.email,
          user.password
        )
        .then((res) => res.data)
        .then((data) => {
          localStorage.setItem("TOKEN", data.token);
          alert("logged Successfully");
        })
        .catch((err) => console.log(err.response.data.errormessage));
    } else {
      alert("Remplissez tous les champs de connexion");
    }
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
        <p>Vous n'avez pas de compte?</p>
      </div>
    </div>
  );
}

export default Login;
