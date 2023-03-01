import useSearch from "hooks/useSearch";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const CollectionSearch = () => {
  const { searchResults } = useSearch();
  return (
    <div className="debug-css">
      {searchResults &&
        searchResults.length > 0 &&
        searchResults.map((movieSearch) => (
          <div key={uuidv4()}>
            {movieSearch.original_title || movieSearch.name}
          </div>
        ))}
    </div>
  );
};

export default CollectionSearch;
