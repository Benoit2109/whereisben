import React from 'react';
import Login from '../../Login/Login';
import SignUp from '../../Signup/SignUp';
import styles from './Connexion.module.css';

function Connexion() {
    return (
        <div className={styles.connexion_wrapper}>
            <Login />
            <SignUp />
        </div>
    )
}

export default Connexion;
