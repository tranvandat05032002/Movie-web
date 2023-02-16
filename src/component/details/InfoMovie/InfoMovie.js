import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Comment/Comments";
import useGetDataAPI from "../../../hooks/useGetDataAPI";
import Overview from "../Overview/Overview";
import InfoCast from "../InfoCast/InfoCast";

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
      <Overview
        setTrailerVisible={setTrailerVisible}
        infoCast={infoCast}
      ></Overview>
      <InfoCast></InfoCast>
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
