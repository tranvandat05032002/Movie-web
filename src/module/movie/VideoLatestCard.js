import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { URLImageDB } from "utils/config";
const VideoLatestCardStyles = styled.div`
  margin-top: 15px;
  .icon-play {
    transition: 0.5s ease-in;
  }
`;

const VideoLatestCard = ({
  data = [],
  parentCallback = () => {},
  parentCallbackGetMovieID = () => {},
  setShow,
  show,
}) => {
  const refImg = React.useRef(
    "https://images.unsplash.com/photo-1611526114392-8d8e229f511d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2651&q=80"
  );
  React.useEffect(() => {
    const handleHover = () => {
      parentCallback(data?.backdrop_path);
    };
    const node = refImg.current;
    if (node) {
      node.addEventListener("mouseover", handleHover);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowModal = () => {
    setShow(true);
    parentCallbackGetMovieID(data?.id);
  };

  return (
    <>
      <VideoLatestCardStyles>
        <div className=" h-max w-max pl-[30px] pb-7">
          <div
            onClick={handleShowModal}
            className="flex flex-col items-center w-full h-full cursor-pointer group "
          >
            <div
              ref={refImg}
              className="relative image max-w-[300px] w-[300px] max-h-[168px] h-[168px] rounded-lg"
            >
              <img
                src={`${URLImageDB}${data?.backdrop_path || data?.poster_path}`}
                alt=""
                className="w-full h-full rounded-lg"
              />
              <FontAwesomeIcon
                icon={faPlay}
                className="absolute icon-play top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40px] h-[40px] group-hover:scale-[1.1]"
              ></FontAwesomeIcon>
            </div>
            <div className="content mt-[10px] text-center">
              <h3 className="font-semibold text-[19px]">
                {data?.original_title}
              </h3>
              <span className="text-base font-normal">
                {`${data?.overview.slice(0, 15)}.... | Trailer`}
              </span>
            </div>
          </div>
        </div>
      </VideoLatestCardStyles>
    </>
  );
};

export default VideoLatestCard;
