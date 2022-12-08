import axios from "axios";
import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useInput } from "../../context/input-context";
import { apiKey } from "../../utils/config";
import MovieCard from "../movie/MovieCard";
const MoviePopularStyles = styled.div`
  padding: var(--padding-dashboard);
`;

const MoviePopular = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [data, setData] = React.useState();
  const [pageIndex, setPageIndex] = React.useState(1);
  const { values } = useInput();
  console.log("🚀 ~ file: MoviePopular.js:17 ~ MoviePopular ~ values", values);
  React.useEffect(() => {
    const fetSearchData = async () => {
      try {
        if (values) {
          const response =
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${values}&page=${pageIndex}
          `);
          if (response.data?.results) {
            setMovieList(response.data?.results);
            setData(response?.data);
          }
        } else {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pageIndex}
            `
          );
          if (response.data?.results) {
            setMovieList(response.data?.results);
            setData(response?.data);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetSearchData();
  }, [pageIndex, values]);
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
  return (
    <MoviePopularStyles>
      <div className="grid grid-cols-5 gap-y-[10px]">
        {movieList.length >= 0 &&
          movieList.map((item) => (
            <MovieCard key={item.id} data={item}></MovieCard>
          ))}
      </div>
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
