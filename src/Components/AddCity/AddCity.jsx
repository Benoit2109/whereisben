import React, {useEffect, useState} from "react";
// import axios from "axios";
import styles from "./AddCity.module.css";
import { Link, useHistory } from "react-router-dom";

const pays = [
    {
      name: "USA",
      last_visited: 2018,
      times_visited: 5,
      photos: "https://www.france-esta.fr/images/voyage-usa.jpg",
      cities: [
        { name: "New York", latitude: "40.75724", longitude: "-73.98656" },
        { name: "Miami", latitude: "25.79105", longitude: "-80.13673" },
        { name: "Los Angeles", latitude: "34.05202", longitude: "-118.23187" },
        { name: "San Francisco", latitude: "37.75376", longitude: "-112.44742" },
        { name: "Las Vegas", latitude: "36.08346", longitude: "-115.18146" },
      ],
    },
    {
      name: "England",
      last_visited: 2016,
      times_visited: 6,
      photos: "https://images.mansionglobal.com/im-196660?width=620&size=1.5005861664712778",
      cities: [
        { name: "London", latitude: "51.51830", longitude: "-0.12495" },
        { name: "Manchester", latitude: "53.48510", longitude: "-2.24441" },
      ],
    },
    {
      name: "Spain",
      last_visited: 2018,
      times_visited: 6,
      photos: "https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075742/spain.jpg",
      cities: [
        { name: "Madrid", latitude: "40.42794", longitude: "-3.70083" },
        { name: "Santiago de Compostela", latitude: "42.87964", longitude: "-8.54554" },
        { name: "Valencia", latitude: "39.47458", longitude: "-0.37799" },
        { name: "Sevilla", latitude: "37.39554", longitude: "-5.98493" },
        { name: "Barcelona", latitude: "41.41022", longitude: "2.17486" },
      ],
    },
  ];


export default function AddCity() {
  const history = useHistory();
  const [city, setCity] = useState([]);

  useEffect(()=> {
      setCity(pays)
  }, [city]);

  const onChange = (e) => {
      setCity(...city, e.target.name)
  }

  

  const onSubmit = (e) => {
    e.preventDefault();

    // axios.post(process.env.REACT_APP_API_BDD).then((res) => res.data);

    history.push("/exploring");
  };
  return (
    <div >
      <div className={styles.formContainer}>
        <form>
          <label htmlFor="Country">
            Pays:
            <input type="text" name="Country" placeholder="Pays" />
          </label>
          <label htmlFor="photos">
            Photos:
            <input type="text" name="photos" placeholder="Url de la photo" />
          </label>
          <label htmlFor="last_visited">
            Année de la dernière visite:
            <input type="number" name="last_visited" placeholder="ex:2017" />
          </label>
          <label htmlFor="times_visited">
            Nombre de visites:
            <input type="number" name="times_visited" placeholder="ex:5" />
          </label>
          <label htmlFor="city">
            Ville visitée:
            <input type="text" name="city" placeholder="nom de la ville" />
            <input type="number" name="city" placeholder="latitude" />
            <input type="number" name="city" placeholder="longitude" />
          </label>
          <label htmlFor="submit">
            <input
              type="submit"
              name="submmit"
              onSubmit={onSubmit}
              value="Envoyer"
            />
          </label>
        </form>
      </div>
      <Link to="/exploring">
        <button>afficher sur la carte</button>
      </Link>
    </div>
  );
}
