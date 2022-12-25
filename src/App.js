import { AuthProvider } from "./context/auth-context";
import { Route, Routes } from "react-router-dom";
import { HomePage, PageNotFound, SignIn, SignUp } from "./pages";
import ForgotPassword from "./pages/ForgotPassword";
import Main from "./component/layout/homepage/Main";
import DashboardLayout from "./module/dashboard/DashboardLayout";
import MoviePopular from "./module/movieList/MoviePopular";
import MovieNowPlaying from "./module/movieList/MovieNowPlaying";
import MovieUpcoming from "./module/movieList/MovieUpcoming";
import MovieRated from "./module/movieList/MovieRated";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/Sign-Up" element={<SignUp></SignUp>}></Route>
          <Route path="/Sign-In" element={<SignIn></SignIn>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          <Route path="/" element={<Main></Main>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            {/* <Route path="/movie:slug"></Route> */}
            <Route element={<DashboardLayout></DashboardLayout>}>
              <Route
                path="/movie"
                element={<MoviePopular></MoviePopular>}
              ></Route>
              <Route
                path="/movie/now-playing"
                element={<MovieNowPlaying></MovieNowPlaying>}
              ></Route>
              <Route
                path="/movie/upcoming"
                element={<MovieUpcoming></MovieUpcoming>}
              ></Route>
              <Route
                path="/movie/top-rated"
                element={<MovieRated></MovieRated>}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
