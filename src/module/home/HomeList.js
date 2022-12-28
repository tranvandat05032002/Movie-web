import { useAuth } from "context/auth-context";
import MovieJoin from "module/movie/MovieJoin";
import MovieListItem from "module/movie/MovieListItem";
import TVListItem from "module/movie/TVListItem";
import VideoLatestList from "module/movie/VideoLatestList";
import React from "react";

const HomeList = () => {
  const { userInfo } = useAuth();
  return (
    <div className="text-black bg-[white]">
      <TVListItem watchOn={"TV Show"} sys="tv" type="popular">
        What's Popular
      </TVListItem>
      <VideoLatestList watchOn={"Movies"} sys="movie" type="now_playing">
        Now Playing | Trailers
      </VideoLatestList>
      <MovieListItem watchOn={"Movies"} sys="movie" type="popular">
        What's Popular
      </MovieListItem>
      {Object.keys(userInfo).length === 0 && <MovieJoin></MovieJoin>}
    </div>
  );
};

export default HomeList;
