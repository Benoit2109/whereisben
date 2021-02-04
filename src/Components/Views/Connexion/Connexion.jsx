import React, {useEffect, useContext} from 'react';
import { CitiesContext } from '../../Context/CitiesContext';
import axios from 'axios';
import Login from '../../Login/Login';
import SignUp from '../../Signup/SignUp';
import styles from './Connexion.module.css';

function Connexion() {
    const { setCities} = useContext(CitiesContext)
    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_BDD}cities`)
          .then((res) => res.data)
          .then((res) => {
            setCities(res);
          });
      }, []);
    return (
        <div className={styles.connexion_wrapper}>
            <Login />
            <SignUp />
        </div>
    )
}

export default Connexion;
