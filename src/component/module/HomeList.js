import React from "react";
import styled from "styled-components";
import ListItem from "../movie/ListItem";
const HomeListStyles = styled.div`
  background-color: white;
`;

const HomeList = () => {
  return (
    <HomeListStyles className="text-black">
      <ListItem watchOn={"On TV"} type="popular">
        What's Popular
      </ListItem>
      <ListItem watchOn={"On TV"} type="airing_today">
        What's on TV today
      </ListItem>
    </HomeListStyles>
  );
};

export default HomeList;
