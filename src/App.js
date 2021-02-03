import React from "react";
import CitiesProvider from "./Components/Context/CitiesContext";
import UserProvider from "./Components/Context/UserContext";
import Root from "./Components/Router/Router";

function App() {
  return (
    <div>
      <CitiesProvider>
        <UserProvider>
          <Root />
        </UserProvider>
      </CitiesProvider>
    </div>
  );
}

export default App;
