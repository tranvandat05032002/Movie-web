import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useFetchAPI } from "hooks/useFetchAPI";
import TVCard from "./TVCard";
// import useSWR from "swr";
// import { fetcher } from "../../utils/config";
const TVListItem = ({ children, watchOn, type = "", sys = "" }) => {
  //use useSWR fetchAPI
  // const { data, error } = useSWR(
  //   "https://api.themoviedb.org/3/tv/popular?api_key=2537abce0574afa219f72b4d7aacde04",
  //   fetcher,
  // );
  // console.log(data);
  const { movieList } = useFetchAPI(sys, type);
  return (
    <div className="w-full pt-[30px]">
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
                <TVCard data={item}></TVCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TVListItem;
