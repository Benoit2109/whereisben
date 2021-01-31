import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css";

export default function Map() {
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
        {
          name: "San Francisco",
          latitude: "37.75376",
          longitude: "-112.44742",
        },
        { name: "Las Vegas", latitude: "36.08346", longitude: "-115.18146" },
      ],
    },
    {
      name: "England",
      last_visited: 2016,
      times_visited: 6,
      photos:
        "https://images.mansionglobal.com/im-196660?width=620&size=1.5005861664712778",
      cities: [
        { name: "London", latitude: "51.51830", longitude: "-0.12495" },
        { name: "Manchester", latitude: "53.48510", longitude: "-2.24441" },
      ],
    },
    {
      name: "Spain",
      last_visited: 2018,
      times_visited: 6,
      photos:
        "https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075742/spain.jpg",
      cities: [
        { name: "Madrid", latitude: "40.42794", longitude: "-3.70083" },
        {
          name: "Santiago de Compostela",
          latitude: "42.87964",
          longitude: "-8.54554",
        },
        { name: "Valencia", latitude: "39.47458", longitude: "-0.37799" },
        { name: "Sevilla", latitude: "37.39554", longitude: "-5.98493" },
        { name: "Barcelona", latitude: "41.41022", longitude: "2.17486" },
      ],
    },
  ];

  return (
    <div>
      <MapContainer
        className={styles.mapContainer}
        center={[51.505, -0.09]}
        zoom={3}
        scrollWheelZoom={true}
        minZoom={2}
        draggable={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=33a48696f2324df5807babc5240f8605"
        />
        {pays.map((pays) => pays.cities.map((city) => (
          <Marker position={[city.latitude, city.longitude]} key={city.name}>
            <Popup>
              {city.name}
            </Popup>
          </Marker>
        )))}
      </MapContainer>
    </div>
  );
}
