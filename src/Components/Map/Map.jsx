import React, { useContext } from "react";

import  L  from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css";
import cityIcon from "../../Assets/pin.svg";
import { CitiesContext } from "../Context/CitiesContext";

const DefaultIcon = new L.icon({
  iconUrl: cityIcon,
  iconSize: [60, 60],
  iconAnchor: [30,40]
});



export default function Map() {
  const { cities } = useContext(CitiesContext);

  return (
    <div>
      <MapContainer
        className={styles.mapContainer}
        center={[51.505, -0.09]}
        zoom={3}
        scrollWheelZoom
        minZoom={2}
        draggable={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=33a48696f2324df5807babc5240f8605"
        />
        {cities.map((city) => (
          <Marker
            className={styles.map_icon}
            position={[city.latitude, city.longitude]}
            key={city.city_name}
            icon={DefaultIcon}
          >
            <Popup>{city.city_name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
