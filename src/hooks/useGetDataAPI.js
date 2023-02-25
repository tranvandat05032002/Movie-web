import axios from "axios";
import React from "react";

export default function useFetDataAPI(
  side,
  type,
  language,
  params,
  typeDetails,
  get,
  date,
  typeSearch,
  queryDebounce = ""
) {
  const [dataMovie, setDataMovie] = React.useState([]);
  const [loadingFetch, setLoadingFetch] = React.useState(true);
  /**
   * @params side (String)
   * @params type (string)
   * @params language(string)
   * @params params(Number)
   * @params typeDetails(String)
   * @returns getDataAPI
   */
  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const fetchData = async () => {
      try {
        setLoadingFetch(true);
        const response = await axios.request(
          {
            method: "GET",
            url: `https://api.themoviedb.org/3/${side ? side + "/" : ""}${
              params ? params + "/" : ""
            }${typeDetails ? typeDetails : ""}${get ? "/" + get + "/" : ""}${
              date ? date : ""
            }${
              typeSearch ? typeSearch : ""
            }?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US`,
            params: {
              query: queryDebounce,
            },
          },
          { cancelToken: source.token }
        );
        setLoadingFetch(false);
        if (response?.data) {
          setDataMovie(response?.data);
          setLoadingFetch(false);
        }
      } catch (error) {
        console.log(error.message);
        setLoadingFetch(false);
      }
    };
    fetchData();
    return () => {
      setDataMovie([]);
      source.cancel();
    };
  }, [side, params, typeDetails, get, date, typeSearch, queryDebounce]);
  return {
    dataMovie,
    loadingFetch,
  };
}
