import React from "react";
import { v4 as uuidV4 } from "uuid";
import CardSkeleton from "./CardSkeleton";

const ListItemSkeleton = ({ total }) => {
  const item = new Array(total).fill(null);
  return (
    <div className="grid grid-cols-5 gap-y-[10px]">
      {item.map(() => (
        <CardSkeleton key={uuidV4()}></CardSkeleton>
      ))}
    </div>
  );
};

export default ListItemSkeleton;
