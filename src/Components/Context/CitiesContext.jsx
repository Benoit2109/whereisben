import React, { createContext, useState } from 'react';
import childrenPropType from '../propTypes/ChildrenProptypes';

export const CitiesContext = createContext({
  datesList: {},
  setDatesList: () => {},
});

CitiesContext.displayName = 'CitiesContext';

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  return (
    <CitiesContext.Provider value={{ cities, setCities }}>
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;

CitiesProvider.propTypes = childrenPropType;
