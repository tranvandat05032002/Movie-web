import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { URLImageDB } from "utils/config";
const TVCardStyles = styled.div`
  padding: 5px 5px;
  border-radius: 8px;
  position: relative;
  background-color: #eeeeee;
  z-index: 1;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    background: linear-gradient(
      65deg,
      rgba(117, 201, 175, 0.2),
      rgba(249, 134, 127, 0.4),
      rgba(84, 194, 191, 0.6)
    );
  }
`;

const TVCard = ({ data }) => {
  return (
    <TVCardStyles className="ml-[35px] w-[170px] min-w-[170px]">
      <div className="max-h-[290px] h-[290px] leading-[20px]">
        <div className="min-h-[calc(150px*1.5)] h-[calc(150px*1.5)] bg-[#dbdbdb] overflow-hidden w-full rounded-lg shadow">
          <img
            src={`${URLImageDB}${data.poster_path || data.backdrop_path}`}
            alt="batman"
            className="inline-block w-full h-full"
          />
        </div>
        {/* <div className="flex flex-col flex-wrap content-start w-full leading-[20px] py-[10px] whitespace-normal"> */}

        <h4 className="text-[18px] text-[#09192a] font-semibold mt-[2px]">
          {data?.name}
        </h4>
        <p className="text-[rgba(0,0,0,0.6)] text-[18px] mt-[2px]">
          {data?.first_air_date}
        </p>
      </div>

      <div className="flex mt-[5px] justify-between w-full items-center pt-[10px]">
        <div className="flex items-baseline content-end">
          <FontAwesomeIcon
            icon={faStar}
            className="mr-[5px] text-yellow-400"
          ></FontAwesomeIcon>
          {data?.vote_average >= 0 && data?.vote_average < 5 && (
            <span className={`font-semibold text-red-500`}>
              {data?.vote_average}
            </span>
          )}
          {data?.vote_average >= 5 && data?.vote_average < 6.5 && (
            <span className={`font-semibold text-orange-500`}>
              {data?.vote_average}
            </span>
          )}
          {data?.vote_average >= 6.5 && data?.vote_average < 8 && (
            <span className={`font-semibold text-blue-500`}>
              {data?.vote_average}
            </span>
          )}
          {data?.vote_average >= 8 && data?.vote_average <= 10 && (
            <span className={`font-semibold text-green-500`}>
              {data?.vote_average}
            </span>
          )}
        </div>
        <div className="flex items-baseline content-end">
          <FontAwesomeIcon
            className="mr-[5px] text-gray-500"
            icon={faUser}
          ></FontAwesomeIcon>
          <span className="font-semibold text-bluef1">{data?.vote_count}</span>
        </div>
      </div>
    </TVCardStyles>
    // </div>
  );
};

export default TVCard;
