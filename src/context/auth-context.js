import { auth } from "firebase-app/firebase-config";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSniper } from "component";
import Swal from "sweetalert2";
export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  //logic
  const navigate = useNavigate();
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;
        setUser({
          displayName,
          photoURL,
          uid,
          email,
        });
        if (user.providerData[0].providerId === "password") {
          navigate("/sign-in");
          setLoading(false);
          return;
        }
        setTimeout(() => {
          Swal.fire({
            position: "top-between",
            icon: "success",
            title: `Welcome ${
              user?.displayName
                ? user.displayName.toLowerCase()
                : "".replace(/(^|\s)\S/g, (l) => l.toUpperCase())
            }!
                    Your work has been saved`,
            showConfirmButton: false,
            timer: 6000,
          });
        }, 500);
        navigate("/");
        setLoading(false);
        return;
      }
      setLoading(false);
      navigate("/Sign-In");
    });
    return () => {
      unsubscribed();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <LoadingSniper></LoadingSniper> : children}
    </AuthContext.Provider>
  );
}
