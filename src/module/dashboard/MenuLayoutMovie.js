import React from "react";
import { Pagination } from "antd";
import SelectMaterial from "component/materialUI/SelectMaterial";
import { useNavigation } from "hooks/useNavigation";
import { useSortMovie } from "hooks/useSortMovie";
import MovieCard from "module/movie/MovieCard";
import styled from "styled-components";
import DashboardTitle from "./DashboardTitle";
import CardSkeleton from "component/Skeleton/CardSkeleton";
const MenuLayoutMovieStyles = styled.div``;
const MenuLayoutMovie = ({ title = "No title", type }) => {
  const {
    sortedData,
    setPageIndex,
    pageIndex,
    totalPage,
    sortType,
    setSortType,
    fetching,
  } = useSortMovie(`${type}`);
  const itemRender = (_, type, originalElement) => {
    switch (type) {
      case "prev":
        return <p>Previous</p>;
      case "next":
        return <p>Next</p>;
      default:
        return originalElement;
    }
  };
  const { getURL } = useNavigation();
  const [pageSize, setPageSize] = React.useState(20);
  const handleChangePageSize = (page, pageSize) => {
    setPageIndex(page);
    setPageSize(pageSize);
  };
  return (
    <MenuLayoutMovieStyles>
      <DashboardTitle title={title}></DashboardTitle>
      <SelectMaterial
        setSortType={setSortType}
        sortType={sortType}
        title="Sort Movies By"
      ></SelectMaterial>
      <div className="w-full">
       {fetching ? <div className="grid grid-cols-5 gap-y-[10px] w-full">
          {sortedData &&
            sortedData.length > 0 &&
            sortedData
              .slice(0, pageSize)
              .map((item) => (
                <MovieCard
                  key={item.id}
                  noPaddingCard
                  onClick={getURL}
                  data={item}
                ></MovieCard>
              ))}
        </div> : <CardSkeleton></CardSkeleton>}
      </div>
      <div className="w-full max-h-[50px] h-[50px] flex items-end justify-center text-center">
        <Pagination
          defaultCurrent={1}
          current={pageIndex}
          total={totalPage}
          pageSize={pageSize}
          onChange={handleChangePageSize}
          itemRender={itemRender}
        ></Pagination>
      </div>
    </MenuLayoutMovieStyles>
  );
};

export default MenuLayoutMovie;
