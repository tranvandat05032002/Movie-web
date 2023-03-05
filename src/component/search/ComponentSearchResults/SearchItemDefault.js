import React from "react";
import SearchItemLayout from "./SearchItemLayout";

const SearchItemDefault = ({ trending }) => {
  return (
    <SearchItemLayout>
      {trending?.original_title ||
        trending?.title ||
        trending?.name ||
        "Error Data"}
    </SearchItemLayout>
  );
};

export default SearchItemDefault;
