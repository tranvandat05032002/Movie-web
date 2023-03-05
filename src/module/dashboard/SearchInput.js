import { LoadingSniper } from "component";
import useGetDataAPI from "hooks/useGetDataAPI";
import { v4 as uuidV4 } from "uuid";
import {
  CloseIconSVG,
  SearchIconSVG,
  TrendingIconSVG,
} from "component/icon/SVG";
import useDebounce from "hooks/useDebounce";
import React from "react";
import styled from "styled-components";
import SearchItemDefault from "component/search/ComponentSearchResults/SearchItemDefault";
import SearchItem from "component/search/ComponentSearchResults/SearchItem";
const ButtonStyles = styled.button`
  position: absolute;
  content: "";
  right: 0%;
  top: 0%;
  bottom: 0%;
  background-image: linear-gradient(to right, #28fff9 60%, #269eff);
  padding: 10px 20px;
  height: 46px;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  &:hover {
    color: black;
  }
`;
const SearchInput = ({ className, hiddenButton }) => {
  const [searchFilter, setSearchFilter] = React.useState("");
  const debounceValue = useDebounce(searchFilter, 500);
  const handleChangeFilter = (e) => {
    if (e.target.value.startsWith(" ")) {
      return;
    } else {
      setSearchFilter(e.target.value);
    }
  };
  const handleResetValue = () => {
    setSearchFilter("");
  };
  const {
    dataMovie: { results: trendingMovie },
  } = useGetDataAPI("", "", "", "", "trending", "all", "day");
  const {
    dataMovie: { results: searchMovie },
    loadingFetch,
  } = useGetDataAPI("search", "", "", "", "", "", "", "movie", debounceValue);
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between flex-nowrap">
        <div className="w-full h-full bg-white">
          <div className="relative flex w-full h-full ">
            <input
              type="text"
              placeholder="Search for a movie, tv show, person......"
              value={searchFilter}
              className="inputItalic italic flex-1 text-[#7e7e7e] pl-[85px] pr-[40px]  py-[10px] h-[46px] focus:outline-none border-gray-300 border-[1px]"
              onChange={handleChangeFilter}
            />
            <div className=" absolute left-[45px] top-[50%] translate-y-[-50%] text-[#000000] ml-[3px]">
              <SearchIconSVG width={28} height={28} className="" />
            </div>
            <div className=" absolute right-0 top-[50%] translate-y-[-50%] text-[#acacac] mr-[10px]">
              {loadingFetch ? (
                <LoadingSniper
                  borderSize="2px"
                  size="15px"
                  color="#acacac"
                ></LoadingSniper>
              ) : (
                <CloseIconSVG
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={handleResetValue}
                />
              )}
            </div>
            {hiddenButton ? (
              <ButtonStyles type="button" className="">
                Search
              </ButtonStyles>
            ) : null}
          </div>

          <div id="listSearch" className=" text-[#4a4a4a]">
            <div className="flex items-center text-[19px] font-bold pl-[50px] pr-10 py-[10px] bg-[#f0f0f0] ">
              <span className="mr-[3px]">
                <TrendingIconSVG width={25} height={25}></TrendingIconSVG>
              </span>
              <span className="">Trending</span>
            </div>
            <ul className="text-[15px]">
              {!searchFilter
                ? trendingMovie &&
                  trendingMovie.length > 0 &&
                  trendingMovie
                    .slice(0, 10)
                    ?.map((trending) => (
                      <SearchItemDefault
                        key={uuidV4()}
                        trending={trending}
                      ></SearchItemDefault>
                    ))
                : searchMovie &&
                  searchMovie.length > 0 &&
                  searchMovie
                    .slice(0, 10)
                    ?.map((movieSearch) => (
                      <SearchItem
                        key={uuidV4()}
                        movieSearch={movieSearch}
                      ></SearchItem>
                    ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
