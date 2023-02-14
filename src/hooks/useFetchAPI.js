import axios from "axios";
import React from "react";
import { apiKey } from "utils/config";
export function useFetchAPI(sys = "", type = "", id = "") {
  const [movieList, setMovieList] = React.useState([]);
  React.useEffect(() => {
    let isApiSubscribed = true;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (isApiSubscribed) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/${sys}/${
              id ? id + "/" + type : type
            }?api_key=${apiKey}`,
            { cancelToken: source.token }
          );
          if (response.data?.results) {
            setMovieList(response.data?.results);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }

    return () => {
      isApiSubscribed = false;
      source.cancel();
    };
  }, [type, sys, id]);
  return {
    movieList,
  };
}
