import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useSort } from "../../hooks/useSort";
import MovieCard from "../movie/MovieCard";
import SelectMaterial from "../../component/materialUI/SelectMaterial";
import DashboardTitle from "../dashboard/DashboardTitle";
const MovieNowPlayingStyles = styled.div`
  margin-left: 35px;
`;

const MovieNowPlaying = () => {
  const { handlePageClick, sortedData, sortType, pageCount, setSortType } =
    useSort("now_playing");
  return (
    <MovieNowPlayingStyles>
      <DashboardTitle title="NowPlaying Movies"></DashboardTitle>
      <SelectMaterial
        setSortType={setSortType}
        sortType={sortType}
        title="Sort Movies By"
      ></SelectMaterial>
      <div className="w-full">
        <div className="grid grid-cols-5 gap-x-[18px] gap-y-[10px] w-full">
          {sortedData.length >= 0 &&
            sortedData.map((item) => (
              <MovieCard noPaddingCard key={item.id} data={item}></MovieCard>
            ))}
        </div>
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
    </MovieNowPlayingStyles>
  );
};

export default MovieNowPlaying;
