import React from "react";
import Menu from "./Menu";
import styles from "./Navbar.module.css";

export default function Navbar() {
  

  
  return (
    <div className={styles.NavbarContainer}>
      <h2>Where the hell is Ben ?</h2>
      <Menu />
    </div>
  );
}
