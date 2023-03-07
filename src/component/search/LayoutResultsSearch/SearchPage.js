import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SearchSidebar from "./SearchSidebar";
const SearchPageStyled = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px 5px 40px;
  background-color: transparent;
  width: 100%;
  display: grid;
  grid-template-columns: 22% 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
`;

const SearchPage = () => {
  return (
    <SearchPageStyled>
      <SearchSidebar></SearchSidebar>
      <Outlet></Outlet>
    </SearchPageStyled>
  );
};

export default SearchPage;
