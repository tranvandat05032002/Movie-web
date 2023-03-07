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
import ItemSidebar from "./ItemSidebar";
import ListItemSidebarSkeleton from "component/loading/Skeleton/ListItemSidebarSkeleton";
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
const SideBar = ({ className }) => {
  const { setSortType, sortType, fetching } = useSortMovie("popular");
  const [listTrending, setListTrending] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(1);
  const getDataTrending = async (page) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=2537abce0574afa219f72b4d7aacde04&page=${page}`,
        { cancelToken: source.token }
      );
      return response.data?.results;
    } catch (error) {
      console.log(error.message);
    }
    return () => {
      source.cancel();
    };
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
  if (sortType === "Title(A-Z)") {
    listTrending.sort((a, b) =>
      (a.original_name || a.original_title) >
      (b.original_name || b.original_title)
        ? 1
        : -1
    );
  }
  console.log(listTrending);
  return (
    <SideBarStyles
      className={`text-black w-[240px] min-w-[240px] text-start ${className}`}
    >
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
          {!fetching &&
            listTrending &&
            listTrending.length > 0 &&
            listTrending.map((trendingData) => (
              <ItemSidebar
                key={uuidV4()}
                trendingData={trendingData}
              ></ItemSidebar>
            ))}

          {fetching && (
            <ListItemSidebarSkeleton total={20}></ListItemSidebarSkeleton>
          )}
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
