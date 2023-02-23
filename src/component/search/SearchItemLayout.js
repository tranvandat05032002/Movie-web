import { SearchIconSVG } from "component/icon/SVG";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchItemLayout = ({ children, setToggleSearch }) => {
  const liRef = React.useRef(null);
  const navigate = useNavigate();
  const handleGetValueSearch = () => {
    setToggleSearch(false)
    navigate(`/search/movie?query=${liRef.current.innerText}`);
  };
  return (
    <li
      onClick={handleGetValueSearch}
      ref={liRef}
      className="flex py-[5px] pl-[50px] pr-10  border-y-[0.5px] cursor-pointer border-[#dfdfdf] hover:bg-[#f0f0f0]"
    >
      <span className="mr-[10px]">
        <SearchIconSVG width={18} height={18}></SearchIconSVG>
      </span>{" "}
      {children}
    </li>
  );
};

export default SearchItemLayout;
