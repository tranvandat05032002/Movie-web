import { Pagination } from "antd";
import SelectMaterial from "component/materialUI/SelectMaterial";
import { useNavigation } from "hooks/useNavigation";
import { useSortTV } from "hooks/useSortTV";
import MovieCard from "module/movie/MovieCard";
import React from "react";
import styled from "styled-components";
import { side } from "utils/config";
import DashboardTitle from "./DashboardTitle";
const MenuLayoutTVStyles = styled.div`
  /* margin-left: 35px; */
`;
const MenuLayoutTV = ({ title = "No title", type }) => {
  const {
    sortedData,
    setPageIndex,
    pageIndex,
    totalPage,
    sortType,
    setSortType,
  } = useSortTV(`${type}`);
  const { getURL } = useNavigation();
  const [pageSize, setPageSize] = React.useState(20);
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
  const handleChangePageSize = (page, pageSize) => {
    setPageIndex(page);
    setPageSize(pageSize);
  };
  return (
    <MenuLayoutTVStyles>
      <DashboardTitle title={title}></DashboardTitle>
      <SelectMaterial
        setSortType={setSortType}
        sortType={sortType}
        title="Sort Movies By"
      ></SelectMaterial>
      <div className="w-full">
        <div className="grid grid-cols-5 gap-y-[10px] w-full">
          {sortedData &&
            sortedData.length >= 0 &&
            sortedData
              .slice(0, pageSize)
              .map((item) => (
                <MovieCard
                  noPaddingCard
                  onClick={getURL}
                  key={item.id}
                  data={item}
                  sys={side.TV}
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
    </MenuLayoutTVStyles>
  );
};

export default MenuLayoutTV;
