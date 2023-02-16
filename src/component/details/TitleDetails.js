import React from "react";

const TitleDetails = ({ children, border }) => {
  return (
    <h2
      className={`uppercase font-medium text-[25px] text-[#333] ${
        border ? "border-b leading-7 border-gray-300" : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default TitleDetails;
