import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { filmOn } from "../../utils/const";
import { v4 as uuidV4 } from "uuid";
import axios from "axios";
import { apiKey } from "../../utils/config";
import { useFetchAPI } from "../../hooks/useFetchAPI";
// import useSWR from "swr";
// import { fetcher } from "../../utils/config";
const MovieListStyles = styled.div``;

const MovieList = ({ children, watchOn, type = "" }) => {
  //use useSWR fetchAPI
  // const { data, error } = useSWR(
  //   "https://api.themoviedb.org/3/tv/popular?api_key=2537abce0574afa219f72b4d7aacde04",
  //   fetcher,
  // );
  // console.log(data);
  const { movieList } = useFetchAPI("tv", type);
  return (
    <MovieListStyles className="w-full pt-[30px]">
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
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {movieList.length > 0 &&
            movieList.map((item) => (
              <SwiperSlide key={item?.id}>
                <MovieCard data={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* </div> */}
    </MovieListStyles>
  );
};

export default MovieList;
