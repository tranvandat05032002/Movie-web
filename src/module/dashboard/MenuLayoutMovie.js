import SelectMaterial from 'component/materialUI/SelectMaterial';
import { useNavigation } from 'hooks/useNavigation';
import { useSortMovie } from 'hooks/useSortMovie';
import MovieCard from 'module/movie/MovieCard';
import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import DashboardTitle from './DashboardTitle';
const MenuLayoutMovieStyles = styled.div`
  margin-left: 35px;
`;
const MenuLayoutMovie = ({title = "No title", type}) => {
    const { handlePageClick, sortedData, sortType, pageCount, setSortType } =
    useSortMovie(`${type}`);
  const { getURL } = useNavigation();
  return (
    <MenuLayoutMovieStyles>
      <DashboardTitle title={title}></DashboardTitle>
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
                typeMovie="cardMovie"
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
    </MenuLayoutMovieStyles>
  );
};

export default MenuLayoutMovie;