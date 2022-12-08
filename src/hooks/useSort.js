import axios from "axios";
import React from "react";
import { apiKey } from "../utils/config";
/**
 *
 * @param {*} type (optional) - type of API fetchData
 * @returns
 */
export function useSort(type) {
  const [movieList, setMovieList] = React.useState([]);
  const [data, setData] = React.useState();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [sortType, setSortType] = React.useState("default");

  const sortedData = React.useMemo(() => {
    let resultsData = movieList;
    if (sortType === "ascending") {
      resultsData = [...movieList].sort(function (a, b) {
        return b.original_title.localeCompare(a.original_title);
      });
    }
    return resultsData;
  }, [movieList, sortType]);

  React.useEffect(() => {
    const fetSearchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&page=${pageIndex}
              `
        );
        if (response.data?.results) {
          setMovieList(response.data?.results);
          setData(response?.data);
          console.log(response);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetSearchData();
  }, [pageIndex, type]);

  const [pageCount, setPageCount] = React.useState(0);
  console.log("🚀 ~ file: useSort.js:45 ~ useSort ~ pageCount", pageCount);
  const [itemOffset, setItemOffset] = React.useState(0);
  const itemsPerPage = 20;
  const totalPage = React.useMemo(() => {
    return data?.total_results;
  }, [data?.total_results]);

  React.useEffect(() => {
    if (!totalPage) return;
    setPageCount(Math.ceil(totalPage / itemsPerPage));
  }, [totalPage, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setPageIndex(event.selected + 1);
  };
  return {
    sortedData,
    sortType,
    setSortType,
    handlePageClick,
    pageCount,
    movieList,
  };
}
