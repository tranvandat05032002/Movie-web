import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "context/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import { dataCategory, dataItem } from "utils/const";
import MenuItem from "component/menuTippy/MenuItem";
import { AddIcon } from "component/icon/AddIcon";
import LanguageItem from "component/menuTippy/LanguageItem";
import Button from "component/button/Button";
import AvatarMaterial from "component/image/AvatarMaterial";
import SearchIcon from "component/icon/SearchIcon";
import DashboardHeading from "module/dashboard/DashboardHeading";
const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  top: 0%;
  left: 0%;
  z-index: 500;
  transition: 0.2s ease-in-out;
  height: var(--height-header);
  a {
    &:hover {
      color: white;
    }
  }
`;
const Header = ({ hideOnClick = false }) => {
  const { userInfo } = useAuth();
  const headerRef = React.useRef();
  React.useEffect(() => {
    const element = headerRef.current;
    const elementHeight = headerRef.current.clientHeight;
    const handleHiddenHeader = () => {
      if (window.scrollY > elementHeight - 10) {
        element.classList.add("headerTranslate");
      } else if (window.scrollY <= elementHeight + 10) {
        element.classList.remove("headerTranslate");
      }
    };
    window.addEventListener("scroll", handleHiddenHeader);
    return () => {
      window.removeEventListener("scroll", handleHiddenHeader);
    };
  }, []);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/sign-in");
  };
  const handleSignIn = () => {
    navigate("/sign-in");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleJoin = async () => {
    if (userInfo && Object.keys(userInfo).length !== 0) {
      signOut(auth);
      navigate("/sign-up");
    }
  };
  React.useEffect(() => {
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
          timer: 6000,
        });
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // }

  //Show search
  const [toggleSearch, setToggleSearch] = React.useState(false);
  const toggleShowSearch = () => {
    setToggleSearch(!toggleSearch);
    console.log(toggleSearch);
  };
  return (
    <HeaderStyles className="bg-bgPrimary" ref={headerRef}>
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
          <SearchIcon
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={toggleShowSearch}
          ></SearchIcon>
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
          <button onClick={handleJoin}>join TMDB</button>
          {!userInfo?.email ? (
            <>
              <Button
                to="/sign-in"
                kind="buttonSecondary"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button kind="buttonSecondary" onClick={handleSignUp}>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button kind="buttonSecondary" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          )}
          {Object.keys(userInfo).length !== 0 && (
            <>
              <AvatarMaterial
                title={userInfo?.photoURl}
                url={userInfo?.photoURL}
              ></AvatarMaterial>
            </>
          )}
        </div>
      </div>
      <DashboardHeading
        className={`${
          toggleSearch ? "opacity-[1]" : "opacity-[0]"
        } transition-all`}
      ></DashboardHeading>
    </HeaderStyles>
  );
};

export default Header;
