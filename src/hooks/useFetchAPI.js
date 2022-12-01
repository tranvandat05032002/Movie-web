import axios from "axios";
import React from "react";
import { apiKey } from "../utils/config";
export function useFetchAPI(sys = "", type = "") {
  const [movieList, setMovieList] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${sys}/${type}?api_key=${apiKey}`
        );
        console.log(response);
        if (response.data?.results) {
          setMovieList(response.data?.results);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return {
    movieList,
  };
}
