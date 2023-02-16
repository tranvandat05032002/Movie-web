import React from "react";
import { URLImageDB } from "utils/config";
import useGetDataAPi from "hooks/useGetDataAPI";
import { useParams } from "react-router-dom";
import Button from "component/button/Button";
import { v4 as uuidv4 } from "uuid";

const Overview = ({ setTrailerVisible, infoCast }) => {
  const params = useParams().movieID;
  const { dataMovie: infoDetails } = useGetDataAPi("movie", "", "", "", params);
  return (
    <div
      className="max-h-[325px] h-[325px] p-[5px] z-20 overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-full before:bg-backgroundBefore before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-[-1]"
      id="info"
    >
      {/* background image */}
      <div className="absolute top-0 bottom-0 left-0 right-0 z-[-2]">
        <img
          className="object-cover w-full h-full"
          src={`${
            infoDetails.backdrop_path && URLImageDB + infoDetails?.backdrop_path
          }`}
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
              src={`${
                infoDetails.poster_path && URLImageDB + infoDetails?.poster_path
              }`}
              alt=""
            />
          </div>
          <div className="absolute bottom-0 flex justify-center w-full">
            <Button
              kind="buttonTrailer"
              className="mr-[10px]"
              onClick={() => setTrailerVisible(true)}
            >
              Trailer
            </Button>
            <Button kind="buttonTrailer" className="">
              Watch Movie
            </Button>
          </div>
          {/* </div> */}
        </div>
        <div className="pl-[20px] w-[785px] overflow-hidden" id="info-right">
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
                    new Date(infoDetails?.release_date).toLocaleDateString(
                      "vi-VN"
                    )}
                </span>
              </li>
              <li className="font-[700]">
                Đánh giá:{" "}
                <span className="font-medium text-colorDetails">
                  {Math.round(infoDetails?.vote_average * 10) / 10 + "/10"}
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
  );
};

export default Overview;
