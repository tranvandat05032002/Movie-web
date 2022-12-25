import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import DashboardHeading from "./DashboardHeading";
import SideBar from "./SideBar";
import { InputProvider } from "../../context/input-context";
import Background from "../../component/animated/Background";
const DashboardHeadingStyles = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px;
  background-color: transparent;
  position: relative;
`;
const DashboardLayout = () => {
  return (
    <InputProvider>
      <DashboardHeadingStyles>
        <Background></Background>
        <div>
          <DashboardHeading></DashboardHeading>
          <div className="flex">
            <SideBar></SideBar>
            <div className="w-full dashboard-children">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </DashboardHeadingStyles>
    </InputProvider>
  );
};

export default DashboardLayout;
