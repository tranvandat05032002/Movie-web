import useSearch from "hooks/useSearch";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const MovieSearch = () => {
  const { searchResults } = useSearch();
  const { listResults } = searchResults;
  return (
    <div className="text-[#333]">
      <div className="overflow-hidden border border-[rgb(227,227,227)] shadow-item cursor-pointer rounded-xl">
        <div className="h-[122px] flex ">
          <div className="w-[91] h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1637544590335-f095207f278a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-[10px] px-[15px] flex flex-col justify-between">
            <div className="w-full leading-[19px]">
              <p className="text-[18px] font-bold">Batman</p>
              <span className="text-[15px] text-[#999]">January 12, 1996</span>
            </div>
            <div className="max-w-[740px] mt-[15px] whitespace-wrap">
              <p className="line-clamp-2 text-ellipsis text-[15px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                doloremque, amet voluptatibus laboriosam saepe voluptatem quas
                magni porro libero quae nulla nisi incidunt voluptatum, quis
                repellendus quisquam. Esse, expedita possimus?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {listResults &&
          listResults.length > 0 &&
          listResults.map((movieSearch) => (
            <div key={uuidv4()}>{movieSearch.original_title}</div>
          ))}
      </div>
    </div>
  );
};

export default MovieSearch;
