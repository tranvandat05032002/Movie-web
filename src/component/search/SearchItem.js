import React from "react";
import SearchItemLayout from "./SearchItemLayout";

const SearchItem = ({ movieSearch, setToggleSearch }) => {
  return (
    <SearchItemLayout setToggleSearch = {setToggleSearch}>
      {movieSearch?.original_title ||
        movieSearch?.title ||
        movieSearch?.name ||
        "Error Data"}
    </SearchItemLayout>
  );
};

export default SearchItem;
