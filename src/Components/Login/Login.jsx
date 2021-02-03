import React from "react";
import axios from 'axios';
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
  })

  const signIn = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BDD}users/`, data)
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("TOKEN", data.token);
        alert("logged Successfully")
      })
      .catch((err) => console.log(err.response.data.errormessage));
    } 
  

  const onSubmit = (data) => {
    if (data.email && data.password) {
      signIn(data)
    } else {
      alert("Remplissez tous les champs de connexion");
    }
  };

  return (
    <div className={styles.Login_wrapper}>
      <form
        className={styles.Login_form_container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.Login_label_container}>
          <label htmlFor="email">
            Email:
            <input
              className={styles.Login_input}
              type="text"
              name="email"
              placeholder="email@mail.com"
              register={register({
                required: "Vous devez renseigner votre adresse e-mail",
                pattern: {
                  value: /^([\w-]+)@([A-Za-z]+)\.([A-Za-z]{2,})$/,
                  message: "Cet e-mail n'est pas valide",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
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
              register={register({
                required: `vous devez renseigner un mot de passe`,
                minLength: {
                  value: 8,
                  message: "Minimum 8 caractères",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>
        </div>
        <label htmlFor="button">
          <input
            className={styles.Login_button}
            type="submit"
            name="button"
            value="Connexion"
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
