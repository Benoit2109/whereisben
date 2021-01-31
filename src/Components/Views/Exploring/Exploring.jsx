import React from 'react';
import Map from '../../Map/Map';
import Vignettes from '../../Vignettes';
import styles from './Exploring.module.css';

export default function Exploring(){
    return (
        <div className={styles.exploringdisplay}>
            <Map />
            <div className={styles.exploringcenter}>
            <Vignettes />
            </div>
        </div>
    )
}