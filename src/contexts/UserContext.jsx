import React, { useContext, useState } from "react";

export const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "Nico",
    lastName: "Nico",
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
