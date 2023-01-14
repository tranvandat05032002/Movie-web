import React from "react";
import styled from "styled-components";
const MovieDetailsStyles = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px;
  background-color: transparent;
`;
const MovieDetailsPage = () => {
  return (
    <MovieDetailsStyles>
      <div>
        <div className="left-content" id="page-info">
          <div className="info"></div>
          <div className="credits"></div>
          <div className="comment"></div>
          <div className="similar"></div>
        </div>
        <div className="right-content" id="sidebar"></div>
      </div>
    </MovieDetailsStyles>
  );
};

export default MovieDetailsPage;
