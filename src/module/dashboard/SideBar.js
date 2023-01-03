import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuidV4 } from "uuid";
import axios from "axios";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { useSortMovie } from "hooks/useSortMovie";
import DashboardTitle from "./DashboardTitle";
import { selectFilm } from "utils/const";
import { URLImageDB } from "utils/config";
const SideBarStyles = styled.div`
  padding: 0px 0px calc(var(--padding-dashboard) - 5px) 0px;
  .item-list {
    .item-sidebar:nth-child(even) {
      background-color: #eae6e6;
    }
  }
  .item-sidebar {
    white-space: nowrap;
    overflow: hidden;
  }
`;
const SideBar = () => {
  const { setSortType, sortType } = useSortMovie("popular");
  const [listTrending, setListTrending] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(1);
  const getDataTrending = async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=2537abce0574afa219f72b4d7aacde04&page=${page}`
      );
      return response.data?.results;
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleLoadMoreTrending = React.useRef({});
  handleLoadMoreTrending.current = async () => {
    try {
      const movieTrending = await getDataTrending(pageIndex);
      const newMovieTrending = [...listTrending, ...movieTrending];
      setListTrending(newMovieTrending || "");
      setPageIndex((prev) => prev + 1);
    } catch (error) {
      console.log(error.message);
    }
  };
  React.useEffect(() => {
    handleLoadMoreTrending.current();
  }, [handleLoadMoreTrending]);
  // console.log(listTrending);
  const sortTrending = [];
  listTrending.forEach((item) => {
    // sortTrending.push(item?.original_title.slice(0, 2));
    // console.log(item?.original_title?.slice(0, 2));
    if (item?.original_title || item?.original_name) {
      sortTrending.push(
        item?.original_title?.slice(0, 1).toUpperCase() ||
          item?.original_name?.slice(0, 1).toUpperCase()
      );
    }
  });
  // const quickSort = (arr) => {
  //   if (arr.length < 2) return;
  //   const pivotIndex = arr.length - 1;
  //   const povot = arr[pivotIndex];
  // };
  return (
    <SideBarStyles className="text-black w-[240px] min-w-[240px] text-start">
      {/* <h1 className="text-[1.5rem] mb-[5px]">Movie Trending</h1> */}
      <DashboardTitle title="Trending Movies"></DashboardTitle>
      <Box sx={{ minWidth: 120 }} className="mb-[20px]">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType}
            label="Sort By"
            onChange={(e) => setSortType(e.target.value)}
          >
            {selectFilm.map((item) => (
              <MenuItem value={item.type} key={uuidV4()}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <SimpleBarReact style={{ maxHeight: 450 }}>
        <div className="item-list">
          {listTrending.map((item) => {
            const nameItem = item.original_title || item.original_name;
            return (
              <div
                key={item.id}
                className="item-sidebar max-h-[48px] h-[45px] flex items-center cursor-pointer"
                title={nameItem.length >= 14 ? nameItem : ""}
              >
                <div className="w-[40px] h-[40px] mr-[5px]">
                  <img
                    src={`${URLImageDB + item.poster_path}`}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start leading-5">
                  <p className="text-[16px] font-semibold">
                    {nameItem.length >= 14
                      ? nameItem.slice(0, 14) + "..."
                      : nameItem}
                  </p>
                  <div className="flex items-center text-[14px] text-hightLight">
                    <span className="italic">
                      {item.vote_average} vote_average
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <p
            className="text-borderLineBlue font-semibold cursor-pointer text-center mt-[5px]"
            onClick={handleLoadMoreTrending.current}
          >
            See more+
          </p>
        </div>
      </SimpleBarReact>
    </SideBarStyles>
  );
};

export default SideBar;
