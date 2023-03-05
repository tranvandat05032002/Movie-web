import useSearch from "hooks/useSearch";
import React from "react";
import styled from "styled-components";
import SearchNavLinkItem from "./SearchNavLinkItem";
const SearchSidebarStyled = styled.div``;
const SearchSidebar = () => {
  const { searchResults } = useSearch();
  const { total_results } = searchResults;
  return (
    <SearchSidebarStyled>
      <div className="rounded-[7px] overflow-hidden border-[0.5px] shadow-item border-gray-300">
        <div className="p-[20px] bg-blueSearch">
          <p className="text-[18px] font-medium text-white overflow-hidden">
            Search Results
          </p>
        </div>
        <div className="w-full h-full text-black333">
          <ul className="w-full">
            <SearchNavLinkItem to={"/search/movie"} total={total_results}>
              Movie shows
            </SearchNavLinkItem>
            <SearchNavLinkItem to={"/search/tv"} total={total_results}>
              TV shows
            </SearchNavLinkItem>
            <SearchNavLinkItem to={"/search/collection"} total={total_results}>
              Collections
            </SearchNavLinkItem>
          </ul>
        </div>
      </div>
      <div className="mt-[10px] text-[14px]">
        <span>Design to 21t10202852@husc.edu.vn</span>
      </div>
    </SearchSidebarStyled>
  );
};

export default SearchSidebar;
