import { AuthProvider } from "./context/auth-context";
import { Route, Routes } from "react-router-dom";
import { HomePage, PageNotFound, SignIn, SignUp } from "./pages";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/Sign-Up" element={<SignUp></SignUp>}></Route>
          <Route path="/Sign-In" element={<SignIn></SignIn>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
