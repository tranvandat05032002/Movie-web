import React from "react";
import styled from "styled-components";
const BannerStyles = styled.div`
  position: relative;
  min-height: 350px;
  max-height: 350px;
  height: 350px;
  margin-top: var(--height-header);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1611526114392-8d8e229f511d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2651&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  //change css
  background-position: 30% 70%;
  padding: 56px 0px;
  //
`;
const ButtonStyles = styled.button`
  position: absolute;
  content: "";
  right: 0%;
  top: 0%;
  bottom: 0%;
  background-image: linear-gradient(to right, #28fff9 60%, #269eff);
  padding: 10px 20px;
  height: 46px;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  &:hover {
    color: black;
  }
`;

const HomeBanner = () => {
  return (
    <BannerStyles>
      <div className="flex w-full h-full px-[40px] py-[30px] flex-wrap flex-col items-start">
        <div className="mb-[30px] w-full">
          <h1 className="text-white text-[48px] font-bold leading-[1]">
            Welcome.
          </h1>
          <p className="text-[32px] font-semibold text-white m-0">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div className="relative flex w-full">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person......"
            className="flex-1 px-[20px] py-[10px] rounded-[30px] h-[46px] focus:border-none focus:outline-none"
          />
          <ButtonStyles type="button" className="">
            Search
          </ButtonStyles>
        </div>
      </div>
    </BannerStyles>
  );
};

export default HomeBanner;
