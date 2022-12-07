import Tippy from "@tippyjs/react/headless";
import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const MenuItem = ({ hideOnClick, item }) => {
  return (
    <span key={uuidv4()}>
      <Tippy
        interactive
        hideOnClick={hideOnClick}
        delay={[0, 100]}
        offset={[-10, 8]}
        placement="bottom-start"
        render={(attrs) => (
          <div
            className="py-2 cursor-pointer text-black bg-white max-w-[350px] w-[171px] rounded-[4px]"
            tabIndex="-1"
            {...attrs}
          >
            {item.menu.length > 0 &&
              item.menu.map((item) => (
                <NavLink key={uuidv4()} to={item.to}>
                  <div className="cursor-pointer hover:bg-gray-100 py-[2px] px-[20px] text-black">
                    {item.title}
                  </div>
                </NavLink>
              ))}
          </div>
        )}
      >
        <span className="cursor-pointer">{item.title}</span>
      </Tippy>
    </span>
  );
};

export default MenuItem;
