import React from "react";
import CitiesProvider from "./Context/CitiesContext";
import UserProvider from "./Context/UserContext";
import Root from "./Router/Router";

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
