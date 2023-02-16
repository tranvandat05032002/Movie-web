import axios from "axios";
import React from "react";

export default function useFetDataAPI(
  side,
  type,
  language,
  params,
  typeDetails
) {
  const [dataMovie, setDataMovie] = React.useState([]);
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
        const response = await axios.request(
          {
            method: "GET",
            url: `https://api.themoviedb.org/3/${side}/${params ? params : ""}${
              typeDetails ? "/" + typeDetails : ""
            }?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US`,
            params: {
              query: "",
            },
          },
          { cancelToken: source.token }
        );
        if (response?.data) {
          setDataMovie(response?.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    return () => {
      setDataMovie([])
      source.cancel();
    };
  }, [side, params, typeDetails]);
  return {
    dataMovie,
  };
}
