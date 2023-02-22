import React from "react";
import TitleDetails from "../TitleDetails";
import ItemCast from "./ItemCast";
const InfoCast = ({params, side}) => {
  return (
    <div id="credits" className="m-[15px] mt-[0px] mr-0 ml-0 pt-[8px]">
      <TitleDetails>
        Top Billed Cast
        </TitleDetails>
      <div id="list-credits">
        <ItemCast params={params} side = {side}></ItemCast>
      </div>
    </div>
  );
};

export default InfoCast;
