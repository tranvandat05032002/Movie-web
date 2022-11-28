import Tippy from "@tippyjs/react";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const LanguageItem = ({ item }) => {
  return (
    <Tippy
      trigger="click"
      content={
        <div className=" text-black bg-white max-w-[350px] w-[241px] py-[5px] rounded-[4px]">
          <h2 className="text-[19px] font-bold mb-2 px-[8px]">
            {item.children?.title}
          </h2>
          {item.children?.data.map((item) => (
            <div key={uuidv4()} className="text-black cursor-pointer tool-tip">
              {`${item.title}(${item.code})`}
            </div>
          ))}
        </div>
      }
    >
      <span className="px-1 rounded-[5px] border border-white cursor-pointer hover:text-black hover:bg-white">
        {item.title}
      </span>
    </Tippy>
  );
};

export default LanguageItem;
