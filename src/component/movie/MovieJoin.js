import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../button/Button";
const MovieJoinStyles = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-nen-batman-dep-huyen-ao.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  padding: 16px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const MovieJoin = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <>
      <MovieJoinStyles className="">
        <div className="text-[30px] font-semibold mb-[16px]">Join Today</div>
        <div className="flex justify-start text-textPrimary">
          <div className="w-[65%] mr-[40px]">
            <div className="mb-[30px] text-[1.2rem]">
              Get access to maintain your own{" "}
              <i className="opacity-70">
                custom personal lists, track what you've seen
              </i>{" "}
              and search and filter for what to{" "}
              <i className="opacity-70"> watch next—regardless if </i> it's in
              theatres, on TV or available on popular streaming services like .
            </div>
            <Button
              onClick={handleSignUp}
              kind="buttonSecondary"
              className="max-w-[100px]"
            >
              Sign Up
            </Button>
          </div>
          <div className="w-auto">
            <ul className="text-[16px]">
              <li className="list-disc">Enjoy TMDB ad free</li>
              <li className="list-disc">Maintain a personal watchlist</li>
              <li className="list-disc">
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li className="list-disc">
                Log the movies and TV shows you've seen
              </li>
              <li className="list-disc">Build custom lists</li>
              <li className="list-disc">
                Contribute to and improve our database
              </li>
            </ul>
          </div>
        </div>
      </MovieJoinStyles>
    </>
  );
};

export default MovieJoin;
