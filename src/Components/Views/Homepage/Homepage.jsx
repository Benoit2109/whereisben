import React, { useContext, useEffect } from "react";
import axios from "axios";

import VideoPlayer from "../../Video/VideoPlayer";
import { CitiesContext } from "../../../Context/CitiesContext";
import styles from "./Homepage.module.css";

export default function Homepage() {
  const { setCities } = useContext(CitiesContext);
  const id = localStorage.getItem("ID");
  useEffect(() => {
    id &&
      axios
        .get(`${process.env.REACT_APP_API_BDD}cities/user/${id}`, {
          headers: {
            Authorization: `bearer ${localStorage.getItem("TOKEN")}`,
          },
        })
        .then((res) => res.data)
        .then((res) => {
          setCities(res);
        });
  }, []);
  return (
    <div className={styles.Homepage_wrapper}>
      <VideoPlayer />
    </div>
  );
}
