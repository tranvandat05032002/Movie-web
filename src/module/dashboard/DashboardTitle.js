import React from "react";
import styled from "styled-components";
const DashboardTitleStyles = styled.div`
  background: linear-gradient(
    to right,
    ${(prop) => prop.theme.textHighlight},
    ${(prop) => prop.theme.inputActive}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: calc(var(--padding-dashboard) - 5px) 0px;

  body {
    font: 900 80px/1 "Source Sans Pro", Arial, sans-serif;
    background: #becccc;
    color: #fff;
    text-align: center;
    letter-spacing: -3px;
    padding-top: 10%;
  }
`;
const DashboardTitle = ({ title = "" }) => {
  return (
    <div className="text-[25.6px] w-[400px] font-semibold text-start">
      <DashboardTitleStyles>{title}</DashboardTitleStyles>
    </div>
  );
};

export default DashboardTitle;
