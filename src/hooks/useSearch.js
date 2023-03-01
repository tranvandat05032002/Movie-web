import axios from "axios";
import { SearchContext } from "context/search-context";
import React from "react";
import { useLocation } from "react-router-dom";
import { apiKey } from "utils/config";

function useSearch() {
  const { querySearch, setQuerySearch, pathNameLocal } =
    React.useContext(SearchContext);
  const [searchResults, setSearchResults] = React.useState([]);

  const location = useLocation();
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    setQuerySearch(query || querySearch);
    const fetchDataSearch = async () => {
      try {
        const response = await axios.request(
          {
            method: "GET",
            url: `https://api.themoviedb.org/3${pathNameLocal}?api_key=${apiKey}&language=en-US&include_adult=false`,
            params: {
              query: querySearch,
              page: 1,
            },
          },
          { cancelToken: source.token }
        );
        if (response?.data) {
          setSearchResults(response?.data?.results);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataSearch();

    return () => {
      console.log("cleaned");
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, querySearch, pathNameLocal]);
  console.log(searchResults);
  return {
    location,
    querySearch,
    searchResults,
  };
}
export default useSearch;
