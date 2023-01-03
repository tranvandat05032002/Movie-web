import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import { useFetchAPI } from "hooks/useFetchAPI";
import MovieCard from "./MovieCard";
const MovieListItem = ({ children, watchOn, type = "", sys = "" }) => {
  const { movieList } = useFetchAPI(sys, type);
  const navigate = useNavigate();
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
                <MovieCard
                  onClick={() => navigate(`/${sys}/${item?.id}`)}
                  data={item}
                  typeMovie = "cardMovie"
                ></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MovieListItem;
