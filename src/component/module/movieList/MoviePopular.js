import axios from "axios";
import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { apiKey } from "../../../utils/config";
import MovieCard from "../../movie/MovieCard";
const MoviePopularStyles = styled.div`
  padding: var(--padding-dashboard);
`;

const MoviePopular = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [data, setData] = React.useState();
  const [pageIndex, setPageIndex] = React.useState(1);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pageIndex}
          `
        );
        if (response.data?.results) {
          setMovieList(response.data?.results);
          setData(response?.data);
          console.log(response.data?.total_pages);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [pageIndex]);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const itemsPerPage = 20;
  const totalPage = React.useMemo(() => {
    return data?.total_results;
  }, [data?.total_results]);

  React.useEffect(() => {
    if (!totalPage) return;
    setPageCount(Math.ceil(totalPage / itemsPerPage));
    console.log(itemOffset);
  }, [totalPage, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setPageIndex(event.selected + 1);
  };
  return (
    <MoviePopularStyles>
      <div className="grid grid-cols-5 gap-y-[10px]">
        {movieList.length >= 0 &&
          movieList.map((item) => (
            <MovieCard key={item.id} data={item}></MovieCard>
          ))}
      </div>
      <div></div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        className="pagination"
      ></ReactPaginate>
    </MoviePopularStyles>
  );
};

export default MoviePopular;
