import { auth } from "firebase-app/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = React.useState({});
  const value = { userInfo, setUserInfo };
  React.useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      }
    });
    return () => {
      unsubscribed();
    };
  }, []);
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
