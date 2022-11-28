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
import { v4 as uuidv4 } from "uuid";
import { dataCategory, dataItem } from "../../../utils/const";
import MenuItem from "../../menuTippy/MenuItem";
import LanguageItem from "../../menuTippy/LanguageItem";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-app/firebase-config";
import Swal from "sweetalert2";
const HeaderStyles = styled.div`
  a {
    &:hover {
      color: white;
    }
  }
`;
const Header = ({ hideOnClick = false }) => {
  const { userInfo } = useAuth();
  console.log("🚀 ~ file: Header.js ~ line 27 ~ Header ~ userInfo", userInfo);
  const handleLogout = async () => {
    await signOut(auth);
  };
  // if (userInfo === "undefined") return;
  // else {
  if (userInfo && Object.keys(userInfo).length !== 0) {
    setTimeout(() => {
      Swal.fire({
        position: "top-between",
        icon: "success",
        title: `Welcome ${
          userInfo?.displayName
            ? userInfo.displayName.toLowerCase()
            : "".replace(/(^|\s)\S/g, (l) => l.toUpperCase())
        }! 
          Your work has been saved`,
        showConfirmButton: false,
        timer: 1500,
      });
    }, 500);
  }
  // }
  return (
    <HeaderStyles>
      <div className="container flex items-center justify-between w-full p-[34px]  max-h-3">
        <div className="flex items-center justify-around  flex-nowrap max-w-[500px] w-[500px]">
          <NavLink to="/" className="w-[150px] h-[50px]">
            <img src="/logo.svg" className="w-full h-full " alt="" />
          </NavLink>

          {dataCategory.length > 0 &&
            dataCategory.map((item) => (
              <MenuItem
                key={uuidv4()}
                hideOnClick={hideOnClick}
                item={item}
              ></MenuItem>
            ))}
        </div>
        <div className="flex items-center justify-around  flex-nowrap max-w-[400px] w-[400px]">
          <Tippy
            content="Can't find a movie or TV show? Login to create it."
            placement="bottom"
            trigger="click"
            delay={[0, 200]}
            maxWidth="200px"
          >
            <div className="w-[30px] h-[30px]">
              <img src={AddIcon} className="w-full h-full" alt="" />
            </div>
          </Tippy>

          {dataItem.length > 0 &&
            dataItem.map((item) => (
              <LanguageItem key={uuidv4()} item={item}></LanguageItem>
            ))}
          <NavLink>join TMDB</NavLink>
          {!userInfo?.email ? (
            <>
              <Button kind="buttonSecondary">Sign In</Button>
              <Button kind="buttonSecondary">Sign Up</Button>
            </>
          ) : (
            <>
              <Button kind="buttonSecondary" onClick={handleLogout}>
                Log Out
              </Button>
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
