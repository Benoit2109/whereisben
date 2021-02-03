import React from "react";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    if (data.email && data.password) {
      //signIn(data);
    } else {
      alert("Remplissez tous les champs");
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
          Password:
          <input
            className={styles.Login_input}
            type="password"
            name="password"
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
      </form>

      <div>
        <p>Vous n'avez pas de compte?</p>
        <Link to="/signup" className={styles.Login_creer}>
          <p>créez-en un!</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
