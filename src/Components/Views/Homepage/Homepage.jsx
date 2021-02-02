import React, {useContext, useEffect} from 'react';
import axios from 'axios';

import VideoPlayer from '../../Video/VideoPlayer';
import { CitiesContext } from '../../Context/CitiesContext';

export default function Homepage() {
    const {setCities} = useContext(CitiesContext)
    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_BDD}cities`)
          .then((res) => res.data)
          .then((res) => {
            setCities(res);
          });
      }, [setCities]);
return(
    <div>
        <VideoPlayer />
    </div>
)
}