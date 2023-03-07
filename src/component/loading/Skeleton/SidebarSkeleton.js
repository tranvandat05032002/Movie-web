import React from "react";
const SidebarSkeleton = () => {
  return (
    <div className="item-sidebar max-h-[48px] h-[45px] flex items-center bg-[#f5f5f5]">
      <div className="w-[40px] h-full mr-[5px] my-auto loading-skeleton-item"></div>
      <div className="flex flex-col items-start w-full leading-5 ">
        <div className="w-full h-[12px] loading-skeleton-item"></div>
        <div className="w-[60%] h-[10px]">
          <div className="w-full h-full loading-skeleton-item"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
