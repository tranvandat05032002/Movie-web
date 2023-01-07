import MenuLayoutTV from "module/dashboard/MenuLayoutTV";
import React from "react";

const TVMovieOnTV = () => {
  return (
    <>
      <MenuLayoutTV
        title="Currently Airing TV"
        type={"on_the_air"}
      ></MenuLayoutTV>
    </>
  );
};

export default TVMovieOnTV;
