import MenuLayoutMovie from "module/dashboard/MenuLayoutMovie";
import React from "react";
const MovieNowPlaying = () => {
  return (
    <>
      <MenuLayoutMovie title = "NowPlaying Movies" type={"now_playing"}></MenuLayoutMovie>
    </>
  );
};

export default MovieNowPlaying;
