import { Route, Routes } from "react-router-dom";
import ForgotPassword from "pages/ForgotPassword";
import { HomePage, PageNotFound, SignIn, SignUp } from "pages";
import Main from "component/layout/homepage/Main";
import DashboardLayout from "module/dashboard/DashboardLayout";
import MoviePopular from "module/movieList/MoviePopular";
import MovieNowPlaying from "module/movieList/MovieNowPlaying";
import MovieUpcoming from "module/movieList/MovieUpcoming";
import MovieRated from "module/movieList/MovieRated";
import TVMoviePopular from "module/tvList/TVMoviePopular";
import TVAiringToday from "module/tvList/TVAiringToday";
import TVMovieOnTV from "module/tvList/TVMovieOnTV";
import TVMovieTopRated from "module/tvList/TVMovieTopRated";
import MovieDetailsPage from "pages/MovieDetailsPage";
import AuthProvider from "context/auth-context";
import PageNotVideoMovie from "pages/PageNotVideoMovie";
import SearchPage from "component/search/LayoutResultsSearch/SearchPage";
import MovieSearch from "component/search/OutletPageSearch/MovieSearch";
import TVSearch from "component/search/OutletPageSearch/TVSearch";
import CollectionSearch from "component/search/OutletPageSearch/CollectionSearch";
import SearchProvider from "context/search-context";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SearchProvider>
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
                <Route
                  path="/tv"
                  element={<TVMoviePopular></TVMoviePopular>}
                ></Route>
                <Route
                  path="/tv/airing-today"
                  element={<TVAiringToday></TVAiringToday>}
                ></Route>
                <Route
                  path="/tv/on-tv"
                  element={<TVMovieOnTV></TVMovieOnTV>}
                ></Route>
                <Route
                  path="/tv/top-rated"
                  element={<TVMovieTopRated></TVMovieTopRated>}
                ></Route>
              </Route>
              <Route
                path="/movie/:movieID"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
              <Route
                path="/movie/now-playing/:movieID"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
              <Route
                path="/movie/upcoming/:movieID"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
              <Route
                path="/movie/top-rated/:movieID"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
              <Route
                path="/tv/:movieID"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
              <Route
                path="/tv/airing-today/:movieID"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
              <Route
                path="/tv/on-tv/:movieID"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
              <Route
                path="/tv/top-rated/:movieID"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
              <Route path="/search" element={<SearchPage></SearchPage>}>
                <Route
                  path="/search/movie"
                  element={<MovieSearch></MovieSearch>}
                ></Route>
                <Route
                  path="/search/tv"
                  element={<TVSearch></TVSearch>}
                ></Route>
                <Route
                  path="/search/collection"
                  element={<CollectionSearch></CollectionSearch>}
                ></Route>
              </Route>
            </Route>
            <Route
              path="/movie/:movieID/watch=/*"
              element={<PageNotVideoMovie></PageNotVideoMovie>}
            ></Route>
            <Route
              path="/tv/:movieID/watch=/*"
              element={<PageNotVideoMovie></PageNotVideoMovie>}
            ></Route>
          </Routes>
        </SearchProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
