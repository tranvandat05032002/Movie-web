import SelectMaterial from "component/materialUI/SelectMaterial";
import { useNavigation } from "hooks/useNavigation";
import { useSort } from "hooks/useSort";
import DashboardTitle from "module/dashboard/DashboardTitle";
import MovieCard from "module/movie/MovieCard";
import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
const MovieNowPlayingStyles = styled.div`
  margin-left: 35px;
`;

const MovieNowPlaying = () => {
  const { handlePageClick, sortedData, sortType, pageCount, setSortType } =
    useSort("now_playing");
  const { getURL } = useNavigation();
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
              <MovieCard
                noPaddingCard
                onClick={getURL}
                key={item.id}
                data={item}
              ></MovieCard>
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
