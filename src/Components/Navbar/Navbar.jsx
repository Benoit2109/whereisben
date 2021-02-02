import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import styles from "./Navbar.module.css";

export default function Navbar() {
  

  
  return (
    <div className={styles.NavbarContainer}>
      <Link to="/"><h2>Where the hell is Ben ?</h2></Link>
      
      <Menu />
    </div>
  );
}
