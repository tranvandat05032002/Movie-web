import React from "react";
import { Pagination } from "antd";
import SelectMaterial from "component/materialUI/SelectMaterial";
import { useNavigation } from "hooks/useNavigation";
import { useSortMovie } from "hooks/useSortMovie";
import MovieCard from "module/movie/MovieCard";
import styled from "styled-components";
import DashboardTitle from "./DashboardTitle";
const MenuLayoutMovieStyles = styled.div`
  margin-left: 35px;
`;
const MenuLayoutMovie = ({ title = "No title", type }) => {
  const {
    sortedData,
    setPageIndex,
    pageIndex,
    totalPage,
    sortType,
    setSortType,
  } = useSortMovie(`${type}`);
  const itemRender = (_, type, originalElement) => {
    switch (type) {
      case "prev":
        return <a href="#">Previous</a>;
      case "next":
        return <a href="#">Next</a>;
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
        <div className="grid grid-cols-5 gap-x-[18px] gap-y-[10px] w-full">
          {sortedData &&
            sortedData.length > 0 &&
            sortedData
              .slice(0, pageSize)
              .map((item) => (
                <MovieCard
                  typeMovie="cardMovie"
                  key={item.id}
                  noPaddingCard
                  onClick={getURL}
                  data={item}
                ></MovieCard>
              ))}
        </div>
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
