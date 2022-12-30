import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const MovieDetailsStyles = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px;
  background-color: transparent;
`;
const MovieDetailsPage = () => {
  let { movieID } = useParams();
  console.log(movieID);
  return (
    <MovieDetailsStyles>
      <p>{movieID}</p>
      <div className="text-black">this is MovieDetails page</div>
    </MovieDetailsStyles>
  );
};

export default MovieDetailsPage;
