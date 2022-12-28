import SelectMaterial from "component/materialUI/SelectMaterial";
import { useSort } from "hooks/useSort";
import DashboardTitle from "module/dashboard/DashboardTitle";
import MovieCard from "module/movie/MovieCard";
import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
const MovieUpcomingStyles = styled.div`
  margin-left: 35px;
`;

const MovieUpcoming = () => {
  const { handlePageClick, sortedData, sortType, pageCount, setSortType } =
    useSort("upcoming");
  return (
    <MovieUpcomingStyles>
      <DashboardTitle title="Upcoming Movies"></DashboardTitle>
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
    </MovieUpcomingStyles>
  );
};

export default MovieUpcoming;
