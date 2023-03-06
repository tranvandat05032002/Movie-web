import axios from "axios";
import { SearchContext } from "context/search-context";
import React from "react";
import { useLocation } from "react-router-dom";
import { apiKey } from "utils/config";

function useSearch() {
  const { querySearch, setQuerySearch, pathNameLocal } =
    React.useContext(SearchContext);
  const [searchResults, setSearchResults] = React.useState({
    listResults: [],
    total_results: 0,
  });
  const [page, setPage] = React.useState(1);
  const location = useLocation();
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    setPage(1);
    setQuerySearch(query || querySearch);
  }, [location.search, querySearch, setQuerySearch]);
  React.useEffect(() => {
    //create token from axios
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const fetchDataSearch = async () => {
      try {
        const response = await axios.request(
          {
            method: "GET",
            url: `https://api.themoviedb.org/3${pathNameLocal}?api_key=${apiKey}&language=en-US&include_adult=false`,
            params: {
              query: querySearch,
              page: page,
            },
          },
          { cancelToken: source.token }
        );
        if (response?.data) {
          if (page === 1) {
            setSearchResults({
              listResults: response?.data?.results,
              total_results: response?.data?.total_results,
            });
          } else {
            setSearchResults((prevResults) => ({
              listResults: [
                ...prevResults.listResults,
                ...response?.data?.results,
              ],
              total_results: prevResults.total_results,
            }));
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataSearch();

    return () => {
      // console.log("cleaned");
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, querySearch, pathNameLocal, page]);
  const loadMore = React.useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);
  return {
    location,
    querySearch,
    searchResults,
    loadMore,
  };
}
export default useSearch;
