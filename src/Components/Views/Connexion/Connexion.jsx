import React, { useEffect, useContext, useState } from "react";
import { CitiesContext } from "../../../Context/CitiesContext";
import axios from "axios";
import Login from "../../Login/Login";
import SignUp from "../../Signup/SignUp";
import styles from "./Connexion.module.css";

function Connexion() {
  const { setCities } = useContext(CitiesContext);
  const [member, setMember] = useState(false);
  const id = localStorage.getItem("ID");
    useEffect(() => {
       id && axios
          .get(`${process.env.REACT_APP_API_BDD}cities/user/${id}`)
          .then((res) => res.data)
          .then((res) => {
            setCities(res);
          });
      }, [member]);
  return (
    <div className={styles.connexion_wrapper}>
      {member ? <SignUp setMember={setMember} /> : <Login setMember={setMember} /> }
    </div>
  );
}

export default Connexion;
