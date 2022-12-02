import React from "react";
import TVListItem from "../movie/TVListItem";

const HomeList = () => {
  return (
    <div className="text-black bg-[white]">
      <TVListItem watchOn={"On TV"} type="popular">
        What's Popular
      </TVListItem>
      <TVListItem watchOn={"On TV"} type="airing_today">
        What's on TV today
      </TVListItem>
    </div>
  );
};

export default HomeList;
