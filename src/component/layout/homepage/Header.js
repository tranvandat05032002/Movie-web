import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../context/auth-context";
import Button from "../../button/Button";
import { AddIcon } from "../../icon/AddIcon";
const HeaderStyles = styled.div`
  a {
    &:hover {
      color: white;
    }
  }
`;

const Header = () => {
  const { userInfo } = useAuth();
  return (
    <HeaderStyles>
      <div className="container flex items-center justify-between w-full p-[34px]  max-h-3">
        <div className="flex items-center justify-around  flex-nowrap max-w-[500px] w-[500px]">
          <NavLink to="/" className="w-[150px] h-[50px]">
            <img src="/logo.svg" className="w-full h-full " alt="" />
          </NavLink>
          <NavLink>Movies</NavLink>
          <NavLink>TV Shows</NavLink>
          <NavLink>People</NavLink>
          <NavLink>More</NavLink>
        </div>
        <div className="flex items-center justify-around  flex-nowrap max-w-[400px] w-[400px]">
          <Tippy
            content="Can't find a movie or TV show? Login to create it."
            placement="bottom"
            delay={[0, 200]}
          >
            <div className="w-[30px] h-[30px]">
              <img src={AddIcon} className="w-full h-full" alt="" />
            </div>
          </Tippy>
          <span className="p-1 border cursor-pointer border-borderLineBlue hover:text-white">
            EN
          </span>
          <NavLink>join TMDB</NavLink>
          {!userInfo?.email ? (
            <>
              <Button kind="buttonSecondary">Sign In</Button>
              <Button kind="buttonSecondary">Sign Up</Button>
            </>
          ) : (
            <>
              <Button kind="buttonSecondary">Log Out</Button>
            </>
          )}
          <FontAwesomeIcon
            className="cursor-pointer text-hightLight"
            icon={faSearch}
          ></FontAwesomeIcon>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
