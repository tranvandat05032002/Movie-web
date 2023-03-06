import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { URLImageDB, URLImageError } from "utils/config";

const CardSearch = ({ resultsData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateSearchToDetails = React.useCallback(() => {
    navigate(location.pathname.slice(7) + "/" + resultsData?.id);
    console.log("called");
  }, [resultsData.id, location.pathname, navigate]);
  return (
    <div
      onClick={navigateSearchToDetails}
      className="overflow-hidden border border-[rgb(227,227,227)] mb-[5px] hover:border-r-[10px] hover:border-r-[#00b4e4] transition-all hover:bg-[#f0f0f0] shadow-item cursor-pointer rounded-xl"
    >
      <div className="h-[122px] flex ">
        <div className="w-[91] h-full overflow-hidden">
          <img
            src={`${
              (resultsData?.poster_path &&
                URLImageDB + resultsData.poster_path) ||
              URLImageError
            }`}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="py-[10px] px-[15px] flex flex-col justify-between">
          <div className="w-full leading-[19px]">
            <p className="text-[18px] font-bold">
              {resultsData?.original_title || resultsData?.original_name}
            </p>
            <span className="text-[15px] text-[#999]">
              {new Date(
                resultsData?.release_date || resultsData?.first_air_date
              ).toLocaleDateString("vi-VN")}
            </span>
          </div>
          <div className="max-w-[740px] mt-[15px] whitespace-wrap">
            <p className="line-clamp-2 text-ellipsis text-[15px]">
              {resultsData?.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
