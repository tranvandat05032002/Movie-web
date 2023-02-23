import React from "react";
import SearchItemLayout from "./SearchItemLayout";

const SearchItemDefault = ({ trending, setToggleSearch }) => {
  return (
    <SearchItemLayout setToggleSearch = {setToggleSearch}>
      {trending?.original_title ||
        trending?.title ||
        trending?.name ||
        "Error Data"}
    </SearchItemLayout>
  );
};

export default SearchItemDefault;
