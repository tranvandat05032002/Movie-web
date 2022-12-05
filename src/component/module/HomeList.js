import React from "react";
import MovieListItem from "../movie/MovieListItem";
import TVListItem from "../movie/TVListItem";
import VideoLatestList from "../movie/VideoLatestList";

const HomeList = () => {
  return (
    <div className="text-black bg-[white]">
      <TVListItem watchOn={"TV Show"} sys="tv" type="popular">
        What's Popular
      </TVListItem>
      <MovieListItem watchOn={"Movies"} sys="movie" type="popular">
        What's Popular
      </MovieListItem>
      <VideoLatestList watchOn={"Movies"} sys="movie" type="now_playing">
        Now Playing | Trailers
      </VideoLatestList>
    </div>
  );
};

export default HomeList;
