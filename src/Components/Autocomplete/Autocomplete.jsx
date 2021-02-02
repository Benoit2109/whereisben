import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

function Autocomplete({ newcity,latitude, setLatitude,longitude, setLongitude }) {
  const { country_name, city_name } = newcity;

  const country = country_name.toLowerCase();
  const city = city_name.toLowerCase();

  const Url = "https://nominatim.openstreetmap.org/search?";

  useEffect(() => {
    axios
      .get(`${Url}q=${country},+${city}&format=geojson`)
      .then((res) => res.data.features[0])
      .then((res) => {
        setLatitude(res.geometry.coordinates[0]);
        setLongitude(res.geometry.coordinates[1]);
      });
  }, [country, city, setLatitude, setLongitude]);

  return (
    <div>
      <ul>
        <li>{latitude}</li>
        <li>{longitude}</li>
      </ul>
    </div>
  );
}

export default Autocomplete;

Autocomplete.propTypes = {
    newcity: PropTypes.object.isRequired,
    setLongitude: PropTypes.number.isRequired,
    setLatitude: PropTypes.number.isRequired,
}
