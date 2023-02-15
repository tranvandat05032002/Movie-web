import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import React from "react";

const ItemComment = () => {
  return (
    <div className=" mb-[7px]">
      <div id="info" className="flex items-center ">
        <Avatar src="https://www.invert.vn/media/uploads/uploads/2022/12/03191146-4-anh-gai-xinh-toc-dai.jpeg">
          A
        </Avatar>
        <div className="">
          <div className="flex items-center">
            <div className="flex flex-col mx-[5px] justify-start bg-[#dfdfdf] text-[15px] rounded-[15px] py-[5px] px-[15px]">
              <h5 className="font-semibold">Trần Văn Đạt</h5>
              <p>Like photo URL ABC123</p>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faEllipsis}
            ></FontAwesomeIcon>
          </div>
          <ul className="flex pl-[20px] mt-[2px] items-center text-[13px] text-[#686868] font-semibold">
            <li className="mr-[7px]">Thích</li>
            <li className="mr-[7px]">Phản hồi</li>
            <li className="font-light">14 phút</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemComment;
