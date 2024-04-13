import React, { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const user = {
    _id: "",
    isBusiness: true,
    isAdmin: true,
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be use withing a Provider");
  return context;
};

// 65424ae9a8d1eae12d31e360