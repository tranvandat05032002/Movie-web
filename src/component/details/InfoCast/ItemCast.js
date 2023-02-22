import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { URLImageDB } from "utils/config";
import useGetDataAPI from "hooks/useGetDataAPI";
import { v4 as uuidV4 } from "uuid";
const ItemCast = ({ params, side }) => {
  const { dataMovie } = useGetDataAPI(side, "", "", params, "credits");
  const { cast: infoCast, crew: infoCastCrew } = dataMovie;
  const [listCast, setListCast] = React.useState([]);
  React.useEffect(() => {
    if (infoCast?.length > infoCastCrew?.length) {
      setListCast(infoCast);
    } else {
      setListCast(infoCastCrew);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoCast, infoCastCrew, listCast]);
  return (
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
      {dataMovie &&
        listCast?.length > 0 &&
        listCast?.map((cast) => (
          <SwiperSlide key={uuidV4()}>
            <div
              id="items-credits"
              className="w-[160px] mr-[7px] h-[255px] rounded-md flex flex-col border border-lightGrey bg-white overflow-hidden"
            >
              <div className="h-[165px]">
                <img
                  className="object-cover object-center w-full h-full"
                  src={`${
                   ( cast?.profile_path && URLImageDB + cast?.profile_path) || "http://thso2bacly.donghoi.edu.vn/App/images/no-image-news.png"
                  }`}
                  alt=""
                />
              </div>
              <div className="p-[10px] text-colorDetails leading-5 pt-[10px]">
                <h5 className="font-bold text-[16px] w-full break-normal overflow-hidden">
                  {cast?.name && cast.name.length > 10
                    ? cast.name.slice(0, 10) + "..."
                    : cast.name}
                </h5>
                <p className="text-[14.4px] text-[#333]">
                  {cast?.known_for_department}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ItemCast;
