import React from "react";
import styled from "styled-components";
import HomeBanner from "../component/module/HomeBanner";
import HomeList from "../component/module/HomeList";

const HomePageStyles = styled.div`
  /* background-color: white; */
  height: 1000px;
`;

const HomePage = () => {
  return (
    <HomePageStyles>
      <HomeBanner></HomeBanner>
      <HomeList></HomeList>
    </HomePageStyles>
  );
};

export default HomePage;
