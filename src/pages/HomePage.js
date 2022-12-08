import React from "react";
import styled from "styled-components";
import HomeBanner from "../module/home/HomeBanner";
import HomeList from "../module/home/HomeList";

const HomePageStyles = styled.div`
  /* background-color: white; */
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
