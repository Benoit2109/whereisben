import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./SignUp.module.css";

function SignUp() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
  });

  const SignUp = async (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BDD}users/newuser`, data)
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("TOKEN", data.token);
        alert("logged Successfully")
      })
  };

  const onSubmit = (data) => {
    console.log(data);
    if (data.user_name && data.firstname && data.email && data.password) {
      SignUp(data);
    } else {
      alert("veuillez remplir tous les champs d'inscription.");
    }
  };
  return (
    <div className={styles.Signup_form_container}>
      <form className={styles.Signup_form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="user_name" className={styles.Signup_label}>
          Nom:
          <input
            className={styles.Signup_input}
            type="text"
            name="user_name"
            placeholder="Nom"
          ></input>
        </label>
        <label htmlFor="firstname" className={styles.Signup_label}>
          Prénom:
          <input
            className={styles.Signup_input}
            type="text"
            name="firstname"
            placeholder="prénom"
          ></input>
        </label>
        <label htmlFor="email" className={styles.Signup_label}>
          email:
          <input
            className={styles.Signup_input}
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
        <label htmlFor="password *" className={styles.Signup_label}>
          Mot de passe:
          <input
            className={styles.Signup_input}
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
        </label>
        <label htmlFor="button">
          <input
            className={styles.Signup_button}
            type="submit"
            name="button"
            value="Inscription"
          ></input>
        </label>
      </form>
    </div>
  );
}

export default SignUp;
