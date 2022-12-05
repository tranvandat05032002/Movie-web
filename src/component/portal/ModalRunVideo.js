import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { apiKey, headerVideoURL } from "../../utils/config";
const ModalRunVideoStyles = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
  position: fixed;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.6)
  );
  z-index: 1000;
`;
const ModalRunVideo = ({ show, setShow, movieID }) => {
  const [trailerList, setTrailerList] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}`
        );
        if (response.data?.results) {
          setTrailerList(response.data?.results);
        }
      } catch (error) {
        console.log(error.message + "API ERROR");
      }
    };
    fetchData();
  }, [movieID]);
  if (typeof document === "undefined") return <div className="modal"></div>;
  if (show) {
    return ReactDOM.createPortal(
      <ModalRunVideoStyles className="flex items-center justify-center">
        <div className="max-w-full w-[945px] max-h-full h-[594px]">
          <div className="relative py-[var(--padding-viewModal)] bg-black px-[16px]">
            <h1 className="text-white text-[20px] font-normal">
              {trailerList[0]?.name}
            </h1>
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => setShow(false)}
              className="absolute right-[12px] cursor-pointer text-[22px] top-[50%] translate-y-[-50%]"
            ></FontAwesomeIcon>
          </div>
          <div className="w-full max-h-full h-[530px]">
            <iframe
              className="w-full h-full"
              src={`${headerVideoURL + trailerList[0]?.key}`}
              title="pretty girl"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </ModalRunVideoStyles>,
      document.querySelector("body")
    );
  }
};

export default ModalRunVideo;
