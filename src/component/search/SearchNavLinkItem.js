import { SearchContext } from "context/search-context";
import React from "react";
import { NavLink } from "react-router-dom";

const SearchNavLinkItem = ({ to, children, total }) => {
  const { querySearch } = React.useContext(SearchContext);
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "searchActive" : "")}
      to={`${to}?search=${querySearch}`}
      end
    >
      <li className=" flex items-center text-[15px] justify-between w-full cursor-pointer font-light px-5 py-[8px] overflow-hidden group hover:bg-grayebebeb">
        <span>{children}</span>
        <div>
          {" "}
          <p className="max-w-[100px] font-thin rounded-[20px] bg-grayebebeb text-center px-[7px] group-hover:bg-white">
            {total}
          </p>{" "}
        </div>
      </li>
    </NavLink>
  );
};

export default SearchNavLinkItem;
