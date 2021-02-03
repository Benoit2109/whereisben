import React, { createContext, useState } from "react";
import childrenPropType from "../propTypes/ChildrenProptypes";

export const UserContext = createContext({
  user: { user_name: "", firstname: "", email: "", password: "" },
  setUser: () => {},
});

UserContext.displayName = "UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({user_name: "", firstname: "", email: "", password: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

UserProvider.propTypes = childrenPropType;
