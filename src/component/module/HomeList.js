import React from "react";
import { useAuth } from "../../context/auth-context";
import MovieJoin from "../movie/MovieJoin";
import MovieListItem from "../movie/MovieListItem";
import TVListItem from "../movie/TVListItem";
import VideoLatestList from "../movie/VideoLatestList";

const HomeList = () => {
  const { userInfo } = useAuth();
  console.log(Object.keys(userInfo).length);
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
