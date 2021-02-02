import React from "react";
import CitiesProvider from "./Components/Context/CitiesContext";
import Root from "./Components/Router/Router";

function App() {
  return (
    <div>
      <CitiesProvider>
        <Root />
      </CitiesProvider>
    </div>
  );
}

export default App;
