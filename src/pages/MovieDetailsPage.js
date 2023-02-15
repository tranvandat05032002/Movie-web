import { v4 as uuidv4, v4 } from "uuid";
import axios from "axios";
import { Button } from "component";
import Background from "component/animated/Background";
// import MovieListItem from "module/movie/MovieListItem";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { URLImageDB } from "utils/config";
import SideBar from "module/dashboard/SideBar";
import MovieListItem from "module/movie/MovieListItem";
import Comments from "component/details/Comment/Comments";
import ModalRunVideo from "component/portal/ModalRunVideo";
import InfoMovie from "component/details/InfoMovie/InfoMovie";
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
  //fetchData
  // const [infoDetails, setInfoDetails] = React.useState([]);
  // const [infoCast, setInfoCast] = React.useState([]);
  // const [keywords, setKeywords] = React.useState([]);
  const [trailerVisible, setTrailerVisible] = React.useState(false);

  // React.useEffect(() => {
  //   const fetchDataDetailsMovie = async () => {
  //     try {
  //       const response = await axios.request({
  //         method: "GET",
  //         url: `https://api.themoviedb.org/3/movie/${params}?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US`,
  //       });
  //       if (response?.data) {
  //         setInfoDetails(response?.data);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchDataDetailsMovie();
  // }, [params]);
  // React.useEffect(() => {
  //   const fetchDataCast = async () => {
  //     try {
  //       const response = await axios.request({
  //         method: "GET",
  //         url: `https://api.themoviedb.org/3/movie/${params}/credits?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US`,
  //       });
  //       if (response?.data?.cast) {
  //         setInfoCast(response?.data?.cast);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchDataCast();
  // }, [params]);

  // React.useEffect(() => {
  //   const fetchKeywords = async () => {
  //     try {
  //       const response = await axios.request({
  //         method: "GET",
  //         url: `https://api.themoviedb.org/3/movie/${params}/keywords?api_key=2537abce0574afa219f72b4d7aacde04`,
  //       });
  //       if (response?.data?.keywords) {
  //         setKeywords(response?.data?.keywords);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchKeywords();
  // }, [params]);

  /**
   *
   */
  // console.log(keywords);
  return (
    <>
      <MovieDetailsStyles>
        <Background></Background>
        <InfoMovie setTrailerVisible={setTrailerVisible}></InfoMovie>
        <div className="relative right-content w-max" id="sidebar">
          <SideBar className="mt-[-10px]"></SideBar>
        </div>
      </MovieDetailsStyles>
      <div id="similar">
        {/* <MovieListItem watchOn={"Movies"} sys="movie" type="now_playing">
          Similar
        </MovieListItem> */}
        <MovieListItem
          watchOn={"On Tv"}
          id={params}
          sys={"movie"}
          type={"similar"}
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
        ></ModalRunVideo>
      )}
    </>
  );
};

export default MovieDetailsPage;
