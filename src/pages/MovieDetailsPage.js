import Background from "component/animated/Background";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import SideBar from "module/dashboard/SideBar";
import MovieListItem from "module/movie/MovieListItem";
import ModalRunVideo from "component/portal/ModalRunVideo";
import InfoMovie from "component/details/InfoMovie/InfoMovie";
import { side } from "utils/config";
const MovieDetailsStyles = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px 5px 40px;
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const MovieDetailsPage = () => {
  const params = useParams().movieID;
  const [trailerVisible, setTrailerVisible] = React.useState(false);
  const location = useLocation();
  const sideURL = location.pathname.slice(1, 3) === "tv" ? side.TV : side.movie;
  return (
    <>
      <MovieDetailsStyles>
        <Background></Background>
        <InfoMovie
          setTrailerVisible={setTrailerVisible}
          side={sideURL}
        ></InfoMovie>
        <div className="relative right-content w-max" id="sidebar">
          <SideBar className="mt-[-10px]" side={side}></SideBar>
        </div>
      </MovieDetailsStyles>
      <div id="similar">
        <MovieListItem
          watchOn={`${sideURL === "tv" ? "On TV" : "On Movie"}`}
          id={params}
          sys={`${sideURL === "tv" ? "tv" : "movie"}`}
          type={"similar"}
          className="text-[#333]"
        >
          Similar
        </MovieListItem>
      </div>
      {/**Portal */}
      {trailerVisible && (
        <ModalRunVideo
          show={trailerVisible}
          movieID={params}
          setShow={setTrailerVisible}
          side={sideURL !== "tv" ? side.movie : sideURL}
        ></ModalRunVideo>
      )}
    </>
  );
};

export default MovieDetailsPage;
