import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import DashboardHeading from "./DashboardHeading";
import SideBar from "./SideBar";
import { InputProvider } from "../../context/input-context";
const DashboardHeadingStyles = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px;
  background-color: transparent;
  position: relative;
`;
const BoxStyles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  div {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 4px solid rgba(127, 208, 232, 0.5);

    &:nth-child(1) {
      top: 30%;
      left: 77%;
      animation: animate 7s linear infinite;
      animation-delay: 0.5s;
    }
    &:nth-child(2) {
      top: 2.7%;
      left: 37%;
      animation: animate 7s linear infinite;
      animation-delay: 1s;
    }
    &:nth-child(3) {
      bottom: 3%;
      right: 5%;
      animation: animate 7s linear infinite;
      animation-delay: 0.5s;
    }
    &:nth-child(4) {
      top: 43%;
      left: 5%;
      animation: animate 7s linear infinite;
      animation-delay: 1s;
    }
    &:nth-child(5) {
      top: 69%;
      left: 15%;
      animation: animate 7s linear infinite;
      animation-delay: 1.5s;
    }
    &:nth-child(6) {
      top: 89%;
      left: 5%;
      animation: animate 7s linear infinite;
      animation-delay: 1s;
    }
    &:nth-child(7) {
      top: 18%;
      left: 18%;
      animation: animate 7s linear infinite;
      animation-delay: 1.5s;
    }
    &:nth-child(8) {
      top: 5%;
      left: 78%;
      animation: animate 7s linear infinite;
      animation-delay: 0.5s;
    }
    &:nth-child(9) {
      top: 72%;
      left: 62%;
      animation: animate 7s linear infinite;
      animation-delay: 1s;
    }
    &:nth-child(10) {
      top: 51%;
      left: 49%;
      animation: animate 7s linear infinite;
      animation-delay: 0.7s;
    }
  }
`;
const DashboardLayout = () => {
  return (
    <InputProvider>
      <DashboardHeadingStyles>
        <BoxStyles className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </BoxStyles>
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
