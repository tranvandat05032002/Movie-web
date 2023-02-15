import Button from "component/button/Button";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { URLImageDB } from "utils/config";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Comment/Comments";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetDataAPI from "../../../hooks/useGetDataAPI";
import Overview from "../Overview/Overview";

const InfoMovie = ({ setTrailerVisible }) => {
  const [infoCast, setInfoCast] = React.useState([]);
  const [keywords, setKeywords] = React.useState([]);
  const params = useParams().movieID;
  const { movieList: infoDetails } = useGetDataAPI("movie", "", "", "", params);
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

  React.useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${params}/keywords?api_key=2537abce0574afa219f72b4d7aacde04`,
        });
        if (response?.data?.keywords) {
          setKeywords(response?.data?.keywords);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchKeywords();
  }, [params]);
  return (
    <div className="left-content w-[calc(75%+55px)] p-[15px]" id="page-info">
      <Overview setTrailerVisible = {setTrailerVisible} infoCast = {infoCast}></Overview>
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
                    <div className="p-[10px] text-colorDetails leading-5 pt-[10px]">
                      <h5 className="font-bold text-[16px] w-full break-normal overflow-hidden">
                        {item?.name && item.name.length > 10
                          ? item.name.slice(0, 10) + "..."
                          : item.name}
                      </h5>
                      <p className="text-[14.4px] text-[#333]">
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
      <div id="overview" className="m-[15px] mt-[0px] ml-0">
        <h2 className="uppercase font-medium text-[25px] text-[#333] border-b leading-7 border-gray-300">
          Từ Khóa
        </h2>
        <div className="mt-[10px] flex flex-wrap gap-[3px]">
          {keywords.length > 0 &&
            keywords.map((keyword) => (
              <p
                key={uuidv4()}
                className="text-colorDetails text-[15px] px-[7px] py-[3px] bg-[#DFDFDF] rounded-[6px] w-max"
              >
                #{keyword?.name}
              </p>
            ))}
        </div>
      </div>
      <div id="comments">
        <h2 className="uppercase font-medium text-[25px] text-[#333] border-b leading-7 border-gray-300">
          Comments
        </h2>
        {/*Facebook developer commnets*/}
        {/* <div
              className="fb-comments"
              data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
              data-width=""
              data-numposts="5"
            ></div> */}
        <Comments></Comments>
      </div>
    </div>
  );
};

export default InfoMovie;
