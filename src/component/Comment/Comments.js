import { Avatar } from "antd";
import React from "react";
import ItemComment from "./ItemComment";

const Comments = () => {
  return (
    <div id="content-comment" className="flex flex-col mt-[20px] px-[5px]">
      <div>
        <form action="" className="flex items-center">
          <Avatar
            className="mr-[6px]"
            src="https://www.invert.vn/media/uploads/uploads/2022/12/03191146-4-anh-gai-xinh-toc-dai.jpeg"
          >
            A
          </Avatar>
          <input
            type="text"
            placeholder="ABCabc..."
            autoComplete="off"
            className="flex-1 mr-[6px] py-[2px] bg-[#ffff] px-[6px] border-none outline-none rounded-[100px] focus:outline-[#009AFF] focus:outline-[1px] text-[#333]"
          />

          <button
            type="submit"
            className="rounded-[3px] bg-[#009AFF] text-white font-medium py-[2px] px-[4px]"
          >
            Đăng
          </button>
        </form>
        <div
          id="comment"
          className="py-[20px] pr-[10px] text-[#333] max-h-[685px] overflow-y-auto"
        >
          <ItemComment></ItemComment>
          <ItemComment></ItemComment>
          <ItemComment></ItemComment>
          <ItemComment></ItemComment>
          <ItemComment></ItemComment>
          <ItemComment></ItemComment>
          <ItemComment></ItemComment>
          <ItemComment></ItemComment>
          <ItemComment></ItemComment>
        </div>
      </div>
    </div>
  );
};

export default Comments;
