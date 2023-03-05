import { SearchIconSVG } from "component/icon/SVG";
import { SearchContext } from "context/search-context";
import React from "react";
import { useNavigate } from "react-router-dom";
const SearchItemLayout = ({ children }) => {
  const navigate = useNavigate();
  const { pathNameLocal, querySearch, setToggleSearch, setPathNameLocal } =
    React.useContext(SearchContext);
  const handleGetValueSearch = (e) => {
    setToggleSearch(false);
    setPathNameLocal("/search/movie");
    navigate(
      `${querySearch ? pathNameLocal : "/search/movie"}?query=${
        e.target.innerText
      }`
    );
  };
  return (
    <li
      onClick={handleGetValueSearch}
      className="flex py-[5px] debug-css pl-[50px] pr-10  border-y-[0.5px] cursor-pointer border-[#dfdfdf] hover:bg-[#f0f0f0]"
    >
      <span className="mr-[10px]">
        <SearchIconSVG width={18} height={18}></SearchIconSVG>
      </span>{" "}
      {children}
    </li>
  );
};

export default SearchItemLayout;
