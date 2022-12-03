import React from "react";
import MovieListItem from "../movie/MovieListItem";
import TVListItem from "../movie/TVListItem";

const HomeList = () => {
  return (
    <div className="text-black bg-[white]">
      <TVListItem watchOn={"TV Show"} sys="tv" type="popular">
        What's Popular
      </TVListItem>
      <MovieListItem watchOn={"Movies"} sys="movie" type="popular">
        What's Popular
      </MovieListItem>
    </div>
  );
};

export default HomeList;
