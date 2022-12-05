import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from "styled-components";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import VideoLatestCard from "./VideoLatestCard";
import { URLImageDB } from "../../utils/config";
import ModalRunVideo from "../portal/ModalRunVideo";
const VideoLatestListStyles = styled.div`
  margin-top: var(--height-header);
  padding: 16px 0px;
  color: white;
`;
const ImageStyles = styled.div`
  transition: 0.5s ease-in-out;
  img {
    object-position: 0px -90px;
  }
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
`;
const VideoLatestList = ({ children, watchOn, sys, type }) => {
  const { movieList } = useFetchAPI(sys, type);
  const [show, setShow] = React.useState(false);
  //callbackFunction
  const [backdrop_path, setBackdrop_path] = React.useState("");
  const [movieID, setMovieID] = React.useState("");
  const callbackFunction = (childBackdrop_path) => {
    setBackdrop_path(childBackdrop_path);
  };
  const callBackGetMovieID = (newMovieID) => {
    setMovieID(newMovieID);
  };
  return (
    <>
      <VideoLatestListStyles className="w-full pt-[30px] relative z-10">
        <ImageStyles className="absolute top-0 bottom-0 left-0 right-0 image z-0] object-cover">
          <img
            className="object-cover w-full h-full"
            src={`${
              backdrop_path
                ? URLImageDB + backdrop_path
                : "https://images.unsplash.com/photo-1636056471685-1cfdfa9d2e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }`}
            alt=""
          />
        </ImageStyles>
        <div className="flex items-center pl-[30px] relative z-20">
          <h2 className="font-semibold text-[1.5rem] mr-[25px]">{children}</h2>
          <div className="max-h-[40px] h-[40px] border-[2px] rounded-[100px] border-transparent">
            <ul className="flex justify-start items-start text-[20px] h-full">
              <li
                className={`font-semibold active py-[4px] h-full rounded-[100px] text-center px-[20px] w-full`}
              >
                <span className="">{watchOn}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="w-full my-[20px] relative top-0 left-0 border border-red-500 flex overflow-hidden"> */}
        <div className="movie-list">
          <Swiper
            grabCursor={"true"}
            slidesPerView={"auto"}
            spaceBetween={180}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper swiper-noCSS "
          >
            {movieList.length > 0 &&
              movieList.map((item) => (
                <SwiperSlide key={item?.id}>
                  <VideoLatestCard
                    data={item}
                    parentCallback={callbackFunction}
                    parentCallbackGetMovieID={callBackGetMovieID}
                    show={show}
                    setShow={setShow}
                  ></VideoLatestCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        {/* </div> */}
      </VideoLatestListStyles>
      {show && (
        <ModalRunVideo
          show={show}
          setShow={setShow}
          movieID={movieID}
        ></ModalRunVideo>
      )}
    </>
  );
};

export default VideoLatestList;
