import React from "react";
import styled from "styled-components";
import { URLBatman } from "../../../utils/config";
const SideBarStyles = styled.div`
  padding: calc(var(--padding-dashboard) - 5px) 0px;
  .item-list {
    .item-sidebar:nth-child(even) {
      background-color: #eae6e6;
    }
  }
`;

const SideBar = () => {
  return (
    <SideBarStyles className="text-black w-[300px] text-start">
      <h1 className="text-[1.5rem] mb-[5px]">Movie Trending</h1>
      <div className="item-list">
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
        <div className="item-sidebar max-h-[48px] h-[45px] flex items-center">
          <div className="w-[40px] h-[40px] mr-[5px]">
            <img src={`${URLBatman}`} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start leading-5">
            <p className="text-[16px] font-semibold">Phuong Hoang Lua</p>
            <div className="flex items-center text-[14px] text-hightLight">
              <span className="italic">6.5 vote_average</span>
            </div>
          </div>
        </div>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
