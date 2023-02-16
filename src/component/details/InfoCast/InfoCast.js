import React from "react";
import { useParams } from "react-router-dom";
import ItemCast from "./ItemCast";
const InfoCast = () => {
  const params = useParams().movieID;
  console.log(params);
  return (
    <div id="credits" className="m-[15px] mt-[0px] mr-0 ml-0 pt-[8px]">
      <h2 className="uppercase font-medium text-[25px] text-[#333]">
        Top Billed Cast
      </h2>
      <div id="list-credits">
        <ItemCast params={params}></ItemCast>
      </div>
    </div>
  );
};

export default InfoCast;
