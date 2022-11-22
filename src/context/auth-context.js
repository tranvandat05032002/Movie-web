import React, { createContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, serUserInfo] = React.useState({});
  const value = { userInfo, serUserInfo };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext();
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
