import axios from "axios";
import React from "react";
import { apiKey } from "utils/config";
/**
 *
 * @param {*} type (optional) - type of API fetchData
 * @returns
 */
export function useSortMovie(type) {
  const [movieList, setMovieList] = React.useState([]);
  const [data, setData] = React.useState();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [sortType, setSortType] = React.useState("");
  // function localeCompareCustom(a, b) {
  //   if (a < b) {
  //     return -1;
  //   }
  //   if (a > b) {
  //     return 1;
  //   }
  //   return 0;
  // }
  // let listTitle = [];
  // movieList.forVal((item) => {
  //   listTitle.push(item.original_title.slice(0, 1));
  // });
  // listTitle.sort((a, b) => {
  //   const nameA = a.toUpperCase();
  //   const nameB = b.toUpperCase();
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   return 0;
  // });
  const sortedData = React.useMemo(() => {
    let resultsData = movieList;
    if (sortType === "TitleDescending") {
      resultsData = [...movieList].sort(function (a, b) {
        return a.original_title
          .toString(a.original_title.length)
          .localeCompare(b.original_title.toString(a.original_title.length));
      });
      console.log(resultsData);
    } else if (sortType === "TitleAscending") {
      resultsData = [...movieList].sort(function (a, b) {
        return b.original_title.localeCompare(a.original_title);
      });
    } else if (sortType === "DateDescending") {
      resultsData = [...movieList].sort(function (a, b) {
        return a.release_date.localeCompare(b.release_date);
      });
    } else if (sortType === "DateAscending") {
      resultsData = [...movieList].sort(function (a, b) {
        return b.release_date.localeCompare(a.release_date);
      });
    } else if (sortType === "RatingDescending") {
      resultsData = [...movieList].sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });
    } else if (sortType === "RatingAscending") {
      resultsData = [...movieList].sort(function (a, b) {
        return a.vote_average - b.vote_average;
      });
    } else if (sortType === "CountDescending") {
      resultsData = [...movieList].sort(function (a, b) {
        return b.vote_count - a.vote_count;
      });
    } else if (sortType === "CountAscending") {
      resultsData = [...movieList].sort(function (a, b) {
        return a.vote_count - b.vote_count;
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
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetSearchData();
  }, [pageIndex, type]);

  const [pageCount, setPageCount] = React.useState(0);
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
    setPageCount,
    movieList,
    setPageIndex,
    pageIndex,
    totalPage,
  };
}
