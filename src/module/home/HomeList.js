import { AuthContext, useAuth } from "context/auth-context";
import MovieJoin from "module/movie/MovieJoin";
import MovieListItem from "module/movie/MovieListItem";
import VideoLatestList from "module/movie/VideoLatestList";
import React from "react";

const HomeList = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <div className="text-black bg-[white]">
      <MovieListItem watchOn={"TV Show"} sys="tv" type="popular">
        What's Popular
      </MovieListItem>
      <VideoLatestList watchOn={"Movies"} sys="movie" type="now_playing">
        Now Playing | Trailers
      </VideoLatestList>
      <MovieListItem watchOn={"Movies"} sys="movie" type="popular">
        What's Popular
      </MovieListItem>
      {Object.keys(user).length === 0 && <MovieJoin></MovieJoin>}
    </div>
  );
};

export default HomeList;
