import { debounce } from "lodash";
import React from "react";
import styled from "styled-components";
import { useInput } from "../../context/input-context";
import DashboardTitle from "./DashboardTitle";
const ButtonStyles = styled.button`
  position: absolute;
  content: "";
  right: 0%;
  top: 0%;
  bottom: 0%;
  background-image: linear-gradient(to right, #28fff9 60%, #269eff);
  padding: 10px 20px;
  height: 46px;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  &:hover {
    color: black;
  }
`;
const DashboardHeading = () => {
  const { setValues } = useInput();
  const handleChange = debounce((e) => {
    if (e.target.value.startWidth(" ")) {
      return;
    }
    setValues(e.target.value);
  }, 600);
  return (
    <div className="flex items-center justify-between flex-nowrap">
      <div className="relative flex w-full">
        <input
          type="text"
          placeholder="Search for a movie, tv show, person......"
          onChange={handleChange}
          className="flex-1 text-black px-[20px] py-[10px] rounded-[30px] h-[46px] focus:border-[#22eee7] focus:border-[2px] focus:outline-transparent border-gray-300 border-[2px]"
        />
        <ButtonStyles type="button" className="">
          Search
        </ButtonStyles>
      </div>
    </div>
  );
};

export default DashboardHeading;
