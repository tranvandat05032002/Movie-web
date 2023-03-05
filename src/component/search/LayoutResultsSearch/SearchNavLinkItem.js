import { SearchContext } from "context/search-context";
import React from "react";
import { NavLink } from "react-router-dom";

const SearchNavLinkItem = ({ to = "/search/movie", children, total }) => {
  const { querySearch, setPathNameLocal } = React.useContext(SearchContext);
  const handleGetPathName = () => {
    setPathNameLocal(to);
  };
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "searchActive" : "")}
      to={`${to}?search=${querySearch}`}
      onClick={handleGetPathName}
      end
    >
      <li className=" flex items-center text-[15px] justify-between w-full cursor-pointer font-light px-5 py-[8px] overflow-hidden group hover:bg-grayebebeb">
        <span>{children}</span>
        <div>
          {" "}
          <p className="max-w-[100px] font-thin rounded-[20px] invisible bg-grayebebeb text-center px-[7px] group-hover:bg-white">
            {total}
          </p>{" "}
        </div>
      </li>
    </NavLink>
  );
};

export default SearchNavLinkItem;
