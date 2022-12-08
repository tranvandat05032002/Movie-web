import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import DashboardHeading from "./DashboardHeading";
import SideBar from "./SideBar";
import { InputProvider } from "../../context/input-context";
const DashboardHeadingStyles = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px;
`;
const DashboardLayout = () => {
  return (
    <InputProvider>
      <DashboardHeadingStyles>
        <DashboardHeading></DashboardHeading>
        <div className="flex">
          <SideBar></SideBar>
          <div className="dashboard-children">
            <Outlet></Outlet>
          </div>
        </div>
      </DashboardHeadingStyles>
    </InputProvider>
  );
};

export default DashboardLayout;