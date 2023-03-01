import useSearch from "hooks/useSearch";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const MovieSearch = () => {
  const { searchResults } = useSearch();
  return (
    <div className="debug-css">
      {searchResults &&
        searchResults.length > 0 &&
        searchResults.map((movieSearch) => (
          <div key={uuidv4()}>{movieSearch.original_title}</div>
        ))}
    </div>
  );
};

export default MovieSearch;
