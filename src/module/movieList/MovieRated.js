import MenuLayoutMovie from "module/dashboard/MenuLayoutMovie";
import React from "react";

const MovieRated = () => {
  return (
    <>
      <MenuLayoutMovie
        title="Top Rated Movies"
        type={"top_rated"}
      ></MenuLayoutMovie>
    </>
  );
};

export default MovieRated;
