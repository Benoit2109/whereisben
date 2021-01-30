import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

/** high order component receiving component */
const MainLayout = ({ component: Component, ...rest }) => {
  return (
    <main>
      <Navbar />
      <Route {...rest} component={Component} />
    </main>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
};
