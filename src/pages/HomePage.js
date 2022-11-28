import React from "react";
import styled from "styled-components";
import Layout from "../component/layout/homepage/Layout";
import HomeBanner from "../component/module/HomeBanner";

const HomePageStyles = styled.div`
  /* background-color: white; */
  height: 1000px;
`;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>{/* <HomeBanner></HomeBanner> */}</Layout>
    </HomePageStyles>
  );
};

export default HomePage;
