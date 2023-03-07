import React from "react";
import { v4 as uuidv4 } from "uuid";
import SidebarSkeleton from "./SidebarSkeleton";

const ListItemSidebarSkeleton = ({ total }) => {
  const itemSkeleton = new Array(total).fill(null);
  return (
    <div className="flex flex-col gap-y-[7px]">
      {itemSkeleton.map(() => (
        <SidebarSkeleton key={uuidv4()}></SidebarSkeleton>
      ))}
    </div>
  );
};

export default ListItemSidebarSkeleton;
