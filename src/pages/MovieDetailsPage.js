import { v4 as uuidv4 } from "uuid";
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
const MovieDetailsStyles = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px;
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
  const [infoDetails, setInfoDetails] = React.useState([]);
  const [infoCast, setInfoCast] = React.useState([]);

  React.useEffect(() => {
    const fetchDataDetailsMovie = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${params}?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US`,
        });
        if (response?.data) {
          setInfoDetails(response?.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataDetailsMovie();
  }, [params]);
  React.useEffect(() => {
    const fetchDataCast = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${params}/credits?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US`,
        });
        if (response?.data?.cast) {
          setInfoCast(response?.data?.cast);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataCast();
  }, [params]);
  /**
   *
   */
  console.log(infoCast);
  return (
    <>
      <MovieDetailsStyles>
        <Background></Background>
        <div
          className="left-content w-[calc(75%+55px)] p-[15px]"
          id="page-info"
        >
          <div
            className="max-h-[325px] h-[325px] p-[5px] z-20 overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-full before:bg-backgroundBefore before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-[-1]"
            id="info"
          >
            {/* background image */}
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[-2]">
              <img
                className="object-cover w-full h-full"
                src={`${URLImageDB + infoDetails?.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="flex w-full h-full">
              <div
                id="info-left"
                className="relative w-[335px] h-full overflow-hidden"
              >
                {/* <div className="relative w-full"> */}
                <div className="w-full h-full overflow-hidden rounded-[5px]">
                  <img
                    className="object-cover w-full h-full"
                    src={`${URLImageDB + infoDetails?.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 flex justify-center w-full">
                  <Button kind="buttonTrailer" className="mr-[10px]">
                    Trailer
                  </Button>
                  <Button kind="buttonTrailer" className="">
                    Watch Movie
                  </Button>
                </div>
                {/* </div> */}
              </div>
              <div
                className="pl-[20px] w-[785px] overflow-hidden"
                id="info-right"
              >
                <h2 className="text-[28px]" id="title">
                  {infoDetails?.original_title}
                </h2>
                <div
                  className="text-[15px] font-[200] text-[#cacaca]"
                  id="description"
                >
                  <ul className="leading-[22px]">
                    <div className="uppercase text-[#afafaf] font-bold">
                      {infoDetails.release_date
                        ? infoDetails?.original_title +
                          " (" +
                          infoDetails?.release_date.slice(0, 4) +
                          ")"
                        : ""}
                    </div>
                    <li className="font-[700]">
                      status:{" "}
                      <span className="font-medium text-colorDetails">
                        {infoDetails?.status}
                      </span>
                    </li>
                    <li className="font-[700]">
                      Đạo diễn:{" "}
                      <span className="font-medium text-colorDetails">
                        Harry Wootliff
                      </span>{" "}
                    </li>
                    <li className="font-[700]">
                      Quốc gia:{" "}
                      {infoDetails.production_countries
                        ? infoDetails?.production_countries
                            .slice(0, 1)
                            .map((item) => (
                              <span
                                key={uuidv4()}
                                className="font-medium text-colorDetails"
                              >
                                {item?.name}
                              </span>
                            ))
                        : ""}
                    </li>
                    <li className="font-[700]">
                      Diễn viên:{" "}
                      <span className="font-medium text-colorDetails">
                        {infoCast.length > 0 &&
                          infoCast
                            .slice(0, 16)
                            .map((item) =>
                              item?.name.length > 13
                                ? item.name.slice(0, 12) + "..., "
                                : item.name + ", "
                            )}
                      </span>
                    </li>
                    <li className="font-[700]">
                      Ngày phát hành:{" "}
                      <span className="font-medium text-colorDetails">
                        {infoDetails.release_date &&
                          new Date(
                            infoDetails?.release_date
                          ).toLocaleDateString("vi-VN")}
                      </span>
                    </li>
                    <li className="font-[700]">
                      Đánh giá:{" "}
                      <span className="font-medium text-colorDetails">
                        {Math.round(infoDetails?.vote_average * 10) / 10 +
                          "/10"}
                      </span>
                    </li>
                    <li className="font-[700]">
                      Thể loại:{" "}
                      {infoDetails.genres &&
                        infoDetails?.genres.slice(0, 4).map((item) => (
                          <span
                            key={uuidv4()}
                            className="mr-[6px] p-1 border border-colorDetails rounded-md cursor-pointer font-medium text-colorDetails"
                          >
                            {item.name}
                          </span>
                        ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="credits" className="m-[15px] mt-[0px] mr-0 ml-0 pt-[8px]">
            <h2 className="uppercase font-medium text-[25px] text-[#333]">
              Top Billed Cast
            </h2>
            <div id="list-credits">
              <Swiper
                grabCursor={"true"}
                spaceBetween={60}
                slidesPerView={5}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {infoCast.length > 0 &&
                  infoCast.map((item) => (
                    <SwiperSlide key={uuidv4()}>
                      <div
                        id="items-credits"
                        className="w-[160px] mr-[7px] h-[255px] rounded-md flex flex-col border border-lightGrey bg-white overflow-hidden"
                      >
                        <div className="h-[165px]">
                          <img
                            className="object-cover object-center w-full h-full"
                            src={`${URLImageDB + item?.profile_path}`}
                            alt=""
                          />
                        </div>
                        <div className="p-[10px] text-[#000] leading-5 pt-[10px]">
                          <h5 className="font-bold text-[16px] w-full break-normal overflow-hidden">
                            {item?.name && item.name.length > 10
                              ? item.name.slice(0, 10) + "..."
                              : item.name}
                          </h5>
                          <p className="text-[14.4px]">
                            {item?.known_for_department}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div id="overview" className="m-[15px] mt-[0px] ml-0">
            <h2 className="uppercase font-medium text-[25px] text-[#333] border-b leading-7 border-gray-300">
              Nội Dung Phim
            </h2>
            <p className="text-[15px] text-colorDetails mt-[10px]">
              {infoDetails?.overview}
            </p>
          </div>
          <div id="comment">
            <h2 className="uppercase font-medium text-[25px] text-[#333] border-b leading-7 border-gray-300">
              Comments
            </h2>
            <div id="content-comment debug-css"></div>
            {/* <div
              className="fb-comments"
              data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
              data-width=""
              data-numposts="5"
            ></div> */}
          </div>
        </div>
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
    </>
  );
};

export default MovieDetailsPage;
