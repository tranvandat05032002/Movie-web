import axios from "axios";
import { SearchContext } from "context/search-context";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiKey } from "utils/config";

export default function useSearch() {
  //   const navigate = useNavigate();
  const { querySearch, setQuerySearch, setToggleSearch } =
    React.useContext(SearchContext);
  const [searchResults, setSearchResults] = React.useState([]);
  const navigate = useNavigate();
  const handleGetValueSearch = (e) => {
    setToggleSearch(false);
    navigate(`/search/movie?query=${e.target.innerText}`);
  };
  const location = useLocation();
  console.log(querySearch);
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
            url: `https://api.themoviedb.org/3${"/search/movie"}?api_key=${apiKey}&language=en-US&include_adult=false`,
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
      setSearchResults([]);
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, location.pathname]);
  return {
    location,
    handleGetValueSearch,
    querySearch,
    searchResults,
  };
}
