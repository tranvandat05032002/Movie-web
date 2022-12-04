import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from "styled-components";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import VideoLatestCard from "./VideoLatestCard";
const VideoLatestListStyles = styled.div`
  margin-top: var(--height-header);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1611526114392-8d8e229f511d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2651&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  //change css
  background-position: 30% 70%;
  padding: 16px 0px;
  color: white;
`;
const VideoLatestList = ({ children, watchOn, sys, type }) => {
  const { movieList } = useFetchAPI(sys, type);
  const myRef = React.useRef(3);
  return (
    <VideoLatestListStyles className="w-full pt-[30px]">
      <div className="flex items-center pl-[30px]">
        <h2 className="font-semibold text-[1.5rem] mr-[25px]">{children}</h2>
        <div className="max-h-[40px] h-[40px] border-[2px] rounded-[100px] border-bgPrimary">
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
                <VideoLatestCard data={item} ref={myRef}></VideoLatestCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* </div> */}
    </VideoLatestListStyles>
  );
};

export default VideoLatestList;
