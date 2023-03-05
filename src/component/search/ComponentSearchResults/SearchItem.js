import React from "react";
import SearchItemLayout from "./SearchItemLayout";

const SearchItem = ({ movieSearch }) => {
  return (
    <SearchItemLayout>
      {movieSearch?.original_title ||
        movieSearch?.title ||
        movieSearch?.name ||
        "Error Data"}
    </SearchItemLayout>
  );
};

export default SearchItem;
