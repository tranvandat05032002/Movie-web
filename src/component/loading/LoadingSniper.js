import React from "react";
import styled from "styled-components";
const LoadingSniperStyles = styled.div`
  width: ${(prop) => prop.size};
  height: ${(prop) => prop.size};
  border: ${(prop) => prop.borderSize} solid white;
  border-top: ${(prop) => prop.borderSize} solid transparent;
  border-bottom: ${(prop) => prop.borderSize} solid transparent;
  border-radius: 100rem;
  display: inline-block;
  animation: spinner 1s infinite linear;
  cursor: pointer;

  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;
const LoadingSniper = ({ size = "14px", borderSize = "2px" }) => {
  return (
    <LoadingSniperStyles
      size={size}
      borderSize={borderSize}
    ></LoadingSniperStyles>
  );
};

export default LoadingSniper;
