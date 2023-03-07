import React from "react";
import { URLImageDB } from "utils/config";

const ItemSidebar = ({ trendingData }) => {
  const { original_title, original_name, poster_path, vote_average } =
    trendingData;
  return (
    <div
      className="item-sidebar max-h-[48px] h-[45px] flex items-center cursor-pointer"
      title={
        original_title || original_name.length >= 14
          ? original_title || original_name
          : ""
      }
    >
      <div className="w-[40px] h-[40px] mr-[5px]">
        <img
          src={`${poster_path && URLImageDB + poster_path}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start leading-5 max-w-[80%] ">
        <p className="text-[16px] font-semibold w-full line-clamp-1 text-ellipsis">
          {(original_title || original_name).length >= 18
            ? (original_title || original_name).slice(0, 18) + "..."
            : original_title || original_name}
        </p>
        <div className="flex items-center text-[14px] text-hightLight">
          <span className="italic">{vote_average} vote_average</span>
        </div>
      </div>
    </div>
  );
};

export default ItemSidebar;
