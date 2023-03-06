import useSearch from "hooks/useSearch";
import React from "react";
import ListCardSearch from "./ListCardSearch";
const LayoutMovieSearch = ({ children }) => {
  const { searchResults, loadMore } = useSearch();
  const { listResults, total_results } = searchResults;
  return (
    <div className="text-[#333]">
      <ListCardSearch listResults={listResults}></ListCardSearch>
      {total_results > 20 && (
        <div className="w-full text-center mt-[20px]">
          {" "}
          <button
            onClick={loadMore}
            className="py-[7px] px-[10px] bg-[#00b4e4] rounded-md text-white font-semibold"
          >LoadMore (+20)</button>{" "}
        </div>
      )}
    </div>
  );
};

export default LayoutMovieSearch;
