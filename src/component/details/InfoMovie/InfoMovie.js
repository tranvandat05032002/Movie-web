import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Comment/Comments";
import useGetDataAPI from "../../../hooks/useGetDataAPI";
import Overview from "../Overview/Overview";
import InfoCast from "../InfoCast/InfoCast";
import { side } from "utils/config";
import Description from "../Overview/Description";
import Keyword from "../Keywords/Keyword";

const InfoMovie = ({ setTrailerVisible }) => {
  const params = useParams().movieID;
  const { dataMovie } = useGetDataAPI(side.movie, "", "", params, "credits");
  const { cast: infoCast } = dataMovie;
  return (
    <div className="left-content w-[calc(75%+55px)] p-[15px]" id="page-info">
      <Overview
        setTrailerVisible={setTrailerVisible}
        infoCast={infoCast}
        params={params}
      ></Overview>
      <div id="cast">
        <InfoCast params={params}></InfoCast>
      </div>
      <Description params={params}></Description>

      <div id="overview" className="m-[15px] mt-[0px] ml-0">
        <Keyword params={params}></Keyword>
      </div>
      <div id="comments">
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
