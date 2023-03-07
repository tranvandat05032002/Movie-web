import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { InputProvider } from "context/input-context";
import Background from "component/animated/Background";
import SideBar from "./SideBar";
import { useSortMovie } from "hooks/useSortMovie";
const SearchInputStyles = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px;
  background-color: transparent;
  position: relative;
  overflow-x: hidden;
`;
const DashboardLayout = () => {
  return (
    <InputProvider>
      <SearchInputStyles>
        <Background></Background>
        <div>
          <div className="flex">
            <div className="w-full dashboard-children">
              <Outlet></Outlet>
            </div>
            <SideBar></SideBar>
          </div>
        </div>
      </SearchInputStyles>
    </InputProvider>
  );
};

export default DashboardLayout;
