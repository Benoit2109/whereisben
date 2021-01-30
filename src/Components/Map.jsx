import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from './Map.module.css';

export default function Map() {
  return (
    <div>
      <MapContainer className={styles.mapContainer} center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=33a48696f2324df5807babc5240f8605"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
