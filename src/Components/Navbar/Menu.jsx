import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu() {
  const [active, setActive] = useState(false);

  const openMenu = () => {
    setActive(!active);
  };

  return (
    <div className={styles.menuWrapper}>
      <button type="button" className={styles.menuButton} onClick={openMenu}>
        MENU
      </button>
      <ul className={`${styles.menuList} ${active && styles.menuOpen}`}>
        <li className={styles.menuListItem} onClick={openMenu}>
          <Link className={styles.menuLink} to='/'><strong>Homepage</strong></Link>
        </li>
        <li className={styles.menuListItem} onClick={openMenu}>
          <Link className={styles.menuLink} to='/exploring'><strong>Exploring cities</strong></Link>
        </li>
        <li className={styles.menuListItem} onClick={openMenu}>
          <Link className={styles.menuLink} to='/addcity'>Add new city</Link>
        </li>
      </ul>
    </div>
  );
}
