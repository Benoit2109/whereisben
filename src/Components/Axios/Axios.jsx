// import React, { useEffect, useContext } from "react";
// import axios from "axios";
// import { CitiesContext } from "../Context/CitiesContext";

// function AxiosGet() {
//   const { setCities } = useContext(CitiesContext);
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_BDD}cities`)
//       .then((res) => res.data)
//       .then((res) => {
//         setCities(res);
//       });
//   }, [setCities]);
//   return(
//       <div></div>
//   )
// }

// module.exports = AxiosGet();
