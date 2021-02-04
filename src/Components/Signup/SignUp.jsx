import React, { useContext } from "react";
import axios from "axios";

import { UserContext } from "../Context/UserContext";
import styles from "./SignUp.module.css";

function SignUp() {
  const { user, setUser } = useContext(UserContext);

  const SignUp = (user) => {
    axios
      .post(`${process.env.REACT_APP_API_BDD}users/newuser`, user)
      .then((res) => res.data)
      .then((data) => {
        alert("incription réussie. Pour continuer, merci de vous connecter ");
      });
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.user_name && user.firstname && user.email && user.password) {
      SignUp(user);
    } else {
      alert("veuillez remplir tous les champs d'inscription.");
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
    </div>
  );
}

export default SignUp;
