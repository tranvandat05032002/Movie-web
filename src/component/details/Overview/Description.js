import React from "react";
import { side } from "utils/config";
import TitleDetails from "../TitleDetails";
import useGetDataAPI from "hooks/useGetDataAPI";

const Description = ({ params }) => {
  const { dataMovie: infoDetails } = useGetDataAPI(
    side.movie,
    "",
    "",
    "",
    params
  );
  return (
    <div id="overview" className="m-[15px] mt-[0px] ml-0">
      <TitleDetails border={true}> Nội Dung Phim</TitleDetails>
      <p className="text-[15px] text-colorDetails mt-[10px]">
        {infoDetails?.overview}
      </p>
    </div>
  );
};

export default Description;
