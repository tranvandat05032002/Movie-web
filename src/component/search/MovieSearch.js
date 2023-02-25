import { SearchContext } from "context/search-context";
import useSearch from "hooks/useSearch";
import MovieCard from "module/movie/MovieCard";
import React from "react";

const MovieSearch = () => {
  //   const { searchResults } = React.useContext(SearchContext);
  //   console.log(searchResults);
  const { searchResults } = useSearch();
//   console.log("searchResults:", searchResults);
  return (
    <div className="debug-css">
      <div>{/* <MovieCard ></MovieCard> */}</div>
    </div>
  );
};

export default MovieSearch;
