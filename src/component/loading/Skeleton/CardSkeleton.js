import React from "react";
import styled from "styled-components";
const CardSkeletonStyles = styled.div`
  padding: 5px 5px;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

const CardSkeleton = () => {
  return (
    <CardSkeletonStyles className={"w-[170px] min-w-[170px] loading-skeleton"}>
      <div className="max-h-[290px] h-[290px] leading-[20px]">
        <div className="min-h-[calc(150px*1.5)] h-[calc(150px*1.5)] w-full loading-skeleton-item overflow-hidden rounded-lg"></div>
        <div className="loading-skeleton-item h-[10px] w-[full]"></div>
        <div className="loading-skeleton-item h-[10px] w-[60%]"></div>
      </div>

      <div className="flex mt-[5px] justify-between w-full align-middle pt-[10px]">
        <div className="flex items-baseline content-end loading-skeleton-item w-[30%] h-[10px]"></div>
        <div className="flex items-baseline content-end loading-skeleton-item w-[30%] h-[10px]"></div>
      </div>
    </CardSkeletonStyles>
  );
};

export default CardSkeleton;
